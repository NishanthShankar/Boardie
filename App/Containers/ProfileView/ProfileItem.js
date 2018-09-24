import React, { Component } from 'react'
import { ScrollView, View, Animated, Text } from 'react-native'
import _ from 'lodash'

// Styles
import styles from './styles'

export default class ProfileItem extends Component {
  state = {
    scroll: new Animated.Value(0)
  }
  onScroll = ({ nativeEvent }) => {}

  render () {
    return (
      <View style={{}}>
        <View style={styles.titleContainer}>
          <Text style={styles.itemTitle}>{this.props.title}</Text>
        </View>
        <ScrollView
          onScroll={this.onScroll}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center' }}
        >
          <Text style={[styles.itemTitle, { opacity: 0 }]}>
            {this.props.title}
          </Text>
          <View
            style={{
              width: 120,
              margin: 24,
              marginRight: 0,
              height: 160,
              backgroundColor: 'white'
            }}
          />
          <View
            style={{
              width: 120,
              margin: 24,
              marginRight: 0,
              height: 160,
              backgroundColor: 'white'
            }}
          />
          <View
            style={{
              width: 120,
              margin: 24,
              marginRight: 0,
              height: 160,
              backgroundColor: 'white'
            }}
          />
        </ScrollView>
      </View>
    )
  }
}
