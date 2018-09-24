import React, { Component } from 'react'
import { ScrollView, View, Animated, Text } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import EventItem from '../../Components/EventItem'
import * as Progress from 'react-native-progress'
import ProfileItem from './ProfileItem'

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
  }

  render () {
    return (
      <View style={[styles.mainContainer]}>
        <ScrollView onScroll={this.onScroll} snapToInterval={100} decelerationRate='fast' >
        <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }} >
          <Progress.Circle size={124} progress={0.4} thickness={6} />
        </View>
          <ProfileItem title='My Games' />
          <ProfileItem title='Wishlist' />
          <ProfileItem title='Events' />
          <ProfileItem title='Events' />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  setHeightFunc: state.bg.setHeight
})

export default connect(mapStateToProps)(HomeView)
