import React, { Component } from 'react'
import { View, Image, Text, TextInput, Animated, FlatList } from 'react-native'
import { connect } from 'react-redux'

import BGGActions from '../../Redux/BGGRedux'
import Touchable from '../../Components/Touchable'
import styles from './styles'

// Seachbar heights 56, 96, no whites
class BGGView extends Component {
  progress = new Animated.Value(0)
  height = new Animated.Value(56)
  textInputRef = React.createRef()
  state = {}
  renderGames = ({ item: { thumbnail } }) => {
    return (
      <View
        style={{ flexDirection: 'row', borderRadius: 4, overflow: 'hidden' }}
      >
        <Image
          source={{ uri: thumbnail }}
          style={{
            borderRadius: 4,
            borderWidth: 4,
            borderColor: '#333',
            height: 176,
            width: 132,
            margin: 6
          }}
        />
      </View>
    )
  }

  onChangeText = text => {
    this.searchPhrase = text
  }

  onSubmit = _ => {
    this.props.getCollection(this.searchPhrase)
  }

  onEdit = _ => {
    Animated.timing(this.progress, { toValue: 0 }).start()
  }

  onChangeText = bggId => this.setState({ bggId })

  focus = _ => {
    this.textInputRef.current.focus()
  }

  onConfirm = _ => {
    Animated.timing(this.progress, { toValue: 1 }).start()
    Animated.timing(this.height, { toValue: 56 }).start()
  }

  onCancel = _ => Animated.timing(this.height, { toValue: 56 }).start()

  onSubmit = _ => Animated.timing(this.height, { toValue: 100 }).start()

  render () {
    let textColor = this.progress.interpolate({
      inputRange: [0, 1],
      outputRange: ['#000', '#fff']
    })

    const backgroundColor = this.progress.interpolate({
      inputRange: [0, 0.75, 1],
      outputRange: ['#ffff', '#ffff', '#0000']
    })
    const elevation = this.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [3, 0]
    })
    const spacerHeight = this.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [44, 12]
    })

    const paddingHorizontal = this.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [8, 0]
    })
    let bggId = this.state.bggId || 'Enter bgg id'
    if (!this.state.bggId) textColor = '#ddd'

    return (
      <View style={[styles.container, { margin: 24, marginBottom: 0 }]}>
        <Animated.View style={{ height: spacerHeight, opacity: 0 }}>
          <TextInput
            ref={this.textInputRef}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmit}
          />
        </Animated.View>

        <Animated.View
          style={[
            styles.searchbar,
            {
              paddingHorizontal,
              elevation,
              height: this.height,
              backgroundColor
            }
          ]}
        >
          <Touchable
            onPress={this.focus}
            style={{ height: 56, flexDirection: 'row', alignItems: 'center' }}
          >
            <Animated.Text style={[styles.titleText, { color: textColor }]}>
              {bggId}
            </Animated.Text>
            <Touchable
              onPress={this.onEdit}
              style={{
                height: 44,
                width: 44,
                marginLeft: 24,
                backgroundColor: '#fff'
              }}
            />
          </Touchable>
          <View style={{ height: 44, alignItems: 'center', flexDirection: 'row' }}>
            <View style={{flex: 1}}>
              <Text>IS THIS YOU GAMER LIST</Text>
            </View>
            <Touchable onPress={this.onCancel} style={{height: 44, width: 44, backgroundColor: '#f7f7f7'}} />
            <Touchable onPress={this.onConfirm} style={{height: 44, width: 44, backgroundColor: '#f7f7f7'}} />
          </View>
        </Animated.View>
        <FlatList
          ListHeaderComponent={() => <View style={{ height: 12 }} />}
          style={{ alignSelf: 'center' }}
          numColumns={2}
          data={this.props.bggGames}
          renderItem={this.renderGames}
        />

      </View>
    )
  }
}

const mapStateToProps = state => ({
  bggGames: state.persisted.bggGames || []
})

const mapDispatchToProps = dispatch => ({
  getCollection: id => dispatch(BGGActions.bggCollectionRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(BGGView)
