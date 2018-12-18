import React, { Component } from 'react'
import { Text, View, Animated } from 'react-native'
// import _ from 'lodash'

// import { Metrics } from '../../Themes'
// import { getUpdateFunc } from '../../Lib/BGControl'

// Styles
import styles from './styles'

const OptionItem = ({label}) => (
  <View style={{ margin: 6, justifyContent: 'center', alignItems: 'center' }}>
    <View
      style={{
        height: 24,
        width: 24,
        backgroundColor: '#e8e8e8',
        marginBottom: 2,
        borderRadius: 12
      }}
    />
    <Text style={styles.text}>{label}</Text>
  </View>
)

export default class NavBar extends Component {
  state = {
    scroll: new Animated.Value(0)
  }

  render () {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          elevation: 3,
          right: 0,
          height: 56,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: 'white'
        }}
      >
        <OptionItem label='HOME' />
        <OptionItem label='EVENTS' />
        <OptionItem label='PROFILE' />
        <OptionItem label='MORE' />
      </View>
    )
  }
}
