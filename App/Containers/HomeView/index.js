import React, { Component } from 'react'
import { ScrollView, View, Animated } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import EventItem from '../../Components/EventItem'
import * as Progress from 'react-native-progress'

import { Metrics } from '../../Themes'
import { getUpdateFunc } from '../../Lib/BGControl'

// Styles
import styles from './styles'

const interpolate = ({ inputRange, outputRange, clamp, x }) => {
  const b = outputRange[0]
  const a = (outputRange[1] - outputRange[0]) / inputRange[1]
  let y = a * x + b
  if (clamp) {
    y = y > _.max(outputRange) ? _.max(outputRange) : y
    y = y < _.min(outputRange) ? _.min(outputRange) : y
  }
  return y
}

class HomeView extends Component {
  state = {
    scroll: new Animated.Value(0),
    opacity: 1
  }
  onScroll = ({ nativeEvent }) => {
    const x = nativeEvent.contentOffset.y
    this.state.scroll.setValue(x)
    const height = interpolate({
      inputRange: [0, 112],
      outputRange: [Metrics.screenHeight / 2, 56],
      clamp: true,
      x
    })
    getUpdateFunc('height')(height)

    const eleX = x - 96
    const elevation = x < 96
      ? 0
      : interpolate({
        inputRange: [0, 16],
        outputRange: [0, 5],
        clamp: true,
        x: eleX
      })
    console.tron.log(eleX)
    getUpdateFunc('elevation')(elevation)
    // this.refs.bg.setHeight(height)
  }

  onExpand = () => {
    this.setState({opacity: 0}) 
  }
  onClose = () => this.setState({opacity: 1})

  render () {
    return (
      <View style={[styles.mainContainer]}>
        <ScrollView onScroll={this.onScroll} style={{opacity: this.state.opacity}}>
          <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }} >
            <Progress.Circle size={124} progress={0.4} thickness={6} />
          </View>
          <EventItem onExpand={this.onExpand} onClose={this.onClose} />
          <EventItem onExpand={this.onExpand} onClose={this.onClose} />
          <EventItem onExpand={this.onExpand} onClose={this.onClose} />
          <EventItem onExpand={this.onExpand} onClose={this.onClose} />
          <EventItem onExpand={this.onExpand} onClose={this.onClose} />
          <EventItem onExpand={this.onExpand} onClose={this.onClose} />
          <EventItem onExpand={this.onExpand} onClose={this.onClose} />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  setHeightFunc: state.bg.setHeight
})

export default connect(mapStateToProps)(HomeView)
