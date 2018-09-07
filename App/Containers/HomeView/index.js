import React, { Component } from 'react'
import { ScrollView, View, Animated } from 'react-native'
import { connect } from 'react-redux'
import { Metrics } from '../../Themes'
// import {getSetBGHeight} from '../../Lib'
import { BGView } from '../BackgroundView'

const ABGVIew = Animated.createAnimatedComponent(BGView)

// Styles
import styles from './styles'

const interpolate = ({ inputRange, outputRange, clamp, x }) => {
  const b = outputRange[0]
  const a = (outputRange[1] - outputRange[0]) / inputRange[1]
  let y = a * x + b
  if (clamp) {
    y = y > outputRange[0] ? outputRange[0] : y
    y = y < outputRange[1] ? outputRange[1] : y
  }
  return y
}

class HomeView extends Component {
  state = {
    scroll: new Animated.Value(0)
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
    console.tron.log('hei', height)
    // getSetBGHeight(height)
    // this.refs.bg.setHeight(height)
  }

  render () {
    const bgHeight = this.state.scroll.interpolate({
      inputRange: [0, 112],
      outputRange: [Metrics.screenHeight / 2, 56],
      extrapolate: 'clamp'
    })
    const bgElevation = this.state.scroll.interpolate({
      inputRange: [0, 96, 112],
      outputRange: [0, 0, 5],
      extrapolate: 'clamp'
    })
    return (
      <View style={[styles.mainContainer]}>
        {/* <ABGVIew height={bgHeight} elevation={bgElevation} /> */}
        <ScrollView onScroll={this.onScroll}>
          <View style={{ height: 200 }} />
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
