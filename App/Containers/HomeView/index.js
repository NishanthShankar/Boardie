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
    scroll: new Animated.Value(0)
  }
  onScroll = ({ nativeEvent }) => {
    // const x = nativeEvent.contentOffset.y
    // this.state.scroll.setValue(x)
    // const height = interpolate({
    //   inputRange: [0, 112],
    //   outputRange: [Metrics.screenHeight / 2, 56],
    //   clamp: true,
    //   x
    // })
    // getUpdateFunc('height')(height)

    // const eleX = x - 96
    // const elevation = x < 96
    //   ? 0
    //   : interpolate({
    //     inputRange: [0, 16],
    //     outputRange: [0, 5],
    //     clamp: true,
    //     x: eleX
    //   })
    // console.tron.log(eleX)
    // getUpdateFunc('elevation')(elevation)
    // this.refs.bg.setHeight(height)
  }

  render () {
    return (
      <View style={[styles.mainContainer]}>
        <ScrollView onScroll={this.onScroll}>
          <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }} >
            <Progress.Circle size={124} progress={0.4} thickness={6} />
          </View>
          <EventItem />
          <View
            style={{
              zIndex: 3,
              margin: 24,
              height: 172,
              backgroundColor: 'white',
              elevation: 3
            }}
          />
          <View
            style={{
              zIndex: 3,
              margin: 24,
              height: 172,
              backgroundColor: 'white',
              elevation: 3
            }}
          />
          <View
            style={{
              zIndex: 3,
              margin: 24,
              height: 172,
              backgroundColor: 'white',
              elevation: 3
            }}
          />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  setHeightFunc: state.bg.setHeight
})

export default connect(mapStateToProps)(HomeView)
