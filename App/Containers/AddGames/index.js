import React, { Component } from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import BGGActions from '../../Redux/BGGRedux'
import styles from './styles'

class AddGamesView extends Component {
  componentDidMount () {
    this.props.getCollection('neo1730')
  }

  renderGames = ({ thumbnail, title, yearPublished }) => {
    return (
      <View>
        <Image
          source={{ uri: thumbnail }}
          style={{ height: 200, width: 150, backgroundColor: 'white' }}
        />
        <Text>{title} ({yearPublished})</Text>
      </View>
    )
  }

  onChangeText = text => {
    this.searchPhrase = text
  }

  onSubmit = _ => {
    console.tron.log('SP:', this.searchPhrase)
    this.props.search(this.searchPhrase)
  }

  render () {
    return (
      <View style={[styles.container, { margin: 24 }]}>
        <View style={{ height: 44 }} />
        <View style={styles.searchbar}>
          <TextInput
            underlineColorAndroid='transparent'
            placeholder='Search by game name'
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmit}
          />
        </View>
        <Text style={{ margin: 24, color: '#333', textAlign: 'center' }}>
          OR
        </Text>
        <View
          style={{
            elevation: 3,
            height: 44,
            borderRadius: 4,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ color: 'white' }}>Add your BoardGameGeek ID</Text>
        </View>
        {this.props.bggGames.map(this.renderGames)}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  bggGames: state.persisted.bggGames || []
})

const mapDispatchToProps = dispatch => ({
  getCollection: id => dispatch(BGGActions.bggCollectionRequest(id)),
  search: phrase => dispatch(BGGActions.bggSearchRequest(phrase))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddGamesView)
