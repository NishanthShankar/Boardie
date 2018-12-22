import React, { Component } from 'react'
import { Text, View, Animated, Modal, TouchableOpacity } from 'react-native'
// import _ from 'lodash'

import { Metrics } from '../../Themes'
import { getUpdateFunc } from '../../Lib/BGControl'

// Styles
import styles from './styles'

export default class EventItem extends Component {
  state = {
    progress: new Animated.Value(0),
    expanded: false
  }

  layout = {}

  renderPrice = _ => {
    return (
      <View
        style={{
          elevation: 4,
          position: 'absolute',
          padding: 4,
          paddingHorizontal: 8,
          backgroundColor: '#888',
          bottom: 88,
          right: 8
        }}
      >
        <Text>R200</Text>
      </View>
    )
  }

  onLayout = () => {}

  onExpand = () => {
    this.refs.card &
      this.refs.card.measureInWindow((x, y, width, height) => {
        this.layout.left = x
        this.layout.top = y
        this.layout.bottom = Metrics.screenHeight - height - y - 26
        this.layout.right = Metrics.screenWidth - width - x
        this.setState({ expanded: true }, () => {
          setTimeout(
            () => getUpdateFunc('animatedHeight')(Metrics.screenHeight / 2),
            300
          )

          Animated.sequence([
            Animated.delay(300)
            // Animated.timing(this.state.progress, { toValue: 1 })
          ]).start(() => {
            // this.props.onExpand && this.props.onExpand()
          })
        })
      })
  }

  close = () => {
    this.props.onClose && this.props.onClose()
    Animated.timing(this.state.progress, { toValue: 0 }).start(() => {
      this.setState({ expanded: false })
    })
  }

  renderExpandContent = () => {
    const left = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [this.layout.left, 12]
    })
    const right = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [this.layout.right, 12]
    })
    const top = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [this.layout.top, 32]
    })
    const bottom = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [this.layout.bottom, 56]
    })
    const fontSize = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 30]
    })
    return (
      <Modal
        transparent
        visible={this.state.expanded}
        onRequestClose={this.close}
      >
        <View style={{ flex: 1, backgroundColor: '#fff0' }}>
          <Animated.View
            style={{
              left,
              right,
              bottom,
              top,
              padding: 12,
              ...styles.expandedContainer
            }}
          >
            <View style={styles.logo} />
            <View style={styles.titleContainer}>
              <Animated.Text style={[styles.title]} numberOfLines={1}>
                Meeples Meet
              </Animated.Text>
            </View>
            <this.renderTime />
            <this.renderLocation />
            <this.renderInfo />
            <this.renderCta />
          </Animated.View>
        </View>
      </Modal>
    )
  }

  renderTime = props => (
    <View
      style={{
        top: 24,
        left: 56,
        flexDirection: 'row',
        alignItems: 'flex-end'
      }}
    >
      <Text style={styles.date}>
        1st Sep
        <Text style={styles.time}> 7:30 PM to 11:30 PM</Text>
      </Text>
    </View>
  )

  renderLocation = props => (
    <View style={{top: 44, left: 4, flexDirection: 'row', minHeight: 44}}>
      <View
        style={{
          height: 24,
          width: 24,
          borderRadius: 12,
          backgroundColor: '#ddd',
          marginRight: 8
        }}
      />
      <Text style={styles.location}>Dialogues Cafe, Koramangala</Text>
    </View>
  )

  renderInfo = props => (
    <View style={{top: 40, left: 4, flexDirection: 'row'}}>
      <View
        style={{
          height: 24,
          width: 24,
          borderRadius: 12,
          backgroundColor: '#ddd',
          marginRight: 8
        }}
      />
      <Text style={styles.location}>12 Boardies</Text>
      <View style={{width: 1, backgroundColor: '#ddd', marginHorizontal: 8}}></View>
      <Text style={styles.location}>24 Games</Text>
    </View>
  )

  renderCta = props => (
    <View style={[styles.ctaContainer, props.style]}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.icon} />
        <Text>SHARE</Text>
      </View>
      <View
        style={{
          backgroundColor: 'black',
          paddingHorizontal: 12,
          paddingVertical: 6
        }}
      >
        <Text style={{ color: 'white' }} numberOfLines={1}>
          JOIN
        </Text>
      </View>
    </View>
  )

  render () {
    return (
      <View>
        <View style={{}}>
          <TouchableOpacity
            ref='card'
            activeOpacity={1}
            onLayout={this.onLayout}
            onPress={this.onExpand}
            style={[styles.container, { height: 48 + 60 + 120 }]}
          >
            <View style={styles.logo} />
            <View style={styles.titleContainer}>
              <Animated.Text style={[styles.title]} numberOfLines={1}>
                Meeples Meet
              </Animated.Text>
            </View>
            <this.renderTime />
            <this.renderLocation />
            <this.renderInfo />
            <this.renderCta />
          </TouchableOpacity>
          <this.renderPrice />
        </View>
        <this.renderExpandContent />
      </View>
    )
  }
}
