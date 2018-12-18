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
              elevation: 3,
              position: 'absolute',
              backgroundColor: '#fff8'
            }}
          >
            <View
              style={{
                position: 'absolute',
                top: 12,
                left: 12,
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: 'blue',
                marginRight: 8
              }}
            />
            <View style={{ position: 'absolute', left: 68, top: 12 }}>
              <Animated.Text style={[styles.title, { fontSize }]}>
                Meeples Meet
              </Animated.Text>
            </View>
            <View style={[styles.titleContainer, {position: 'absolute', right: 12, left: 68, top: 38}]}>
              <View style={{ flex: 1 }}>
                <Text style={styles.subTitle}>Dialogues Cafe, Koramangala</Text>
              </View>
              <Text style={styles.time}>3PM - 11PM</Text>
            </View>
            <this.renderCta
              style={{ position: 'absolute', left: 12, bottom: 0, right: 12 }}
            />
          </Animated.View>
        </View>
      </Modal>
    )
  }

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
        <Text style={{ color: 'white' }}>JOIN</Text>
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
            style={styles.container}
          >
            <View style={{ flexDirection: 'row' }}>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: 'blue',
                  marginRight: 8
                }}
              />
              <View style={{ flex: 1 }}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Meeples Meet</Text>
                  <Text style={styles.date}>01 Sep</Text>
                </View>
                <View style={styles.titleContainer}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.subTitle}>
                      Dialogues Cafe, Koramangala
                    </Text>
                  </View>
                  <Text style={styles.time}>3PM - 11PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentContainer}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text style={styles.number}>2</Text>
                <Text>GAMERS</Text>
              </View>
              <View style={{ width: 2, backgroundColor: '#eee' }} />
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text style={styles.number}>24</Text>
                <Text>GAMES</Text>
              </View>
            </View>
            <View style={{ height: 2, backgroundColor: '#eee' }} />
            <this.renderCta />
          </TouchableOpacity>
          <this.renderPrice />
        </View>
        <this.renderExpandContent />
      </View>
    )
  }
}
