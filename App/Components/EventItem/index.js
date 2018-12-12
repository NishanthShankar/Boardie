import React, { Component } from 'react'
import { Text, View, Animated } from 'react-native'
import _ from 'lodash'

import { Metrics } from '../../Themes'
import { getUpdateFunc } from '../../Lib/BGControl'

// Styles
import styles from './styles'

export default class EventItem extends Component {
  state = {
    scroll: new Animated.Value(0)
  }

  render () {
    return (
      <View>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: 'black',
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
          <View style={styles.ctaContainer}>
            <View
              style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
            >
              <View style={styles.icon} />
              <View style={styles.icon} />
            </View>
            <Text>JOIN</Text>
          </View>
        </View>
      </View>
    )
  }
}
