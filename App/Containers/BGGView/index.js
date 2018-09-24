import React, { Component } from 'react'
import { View, Text, Image, TextInput, FlatList } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import BGGActions from '../../Redux/BGGRedux'
import styles from './styles'

class BGGView extends Component {
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
  
  render () {
    return (
      <View style={[styles.container, { margin: 24, marginBottom: 0 }]}>
        <View style={{height: 24}} />
        <View style={{ height: 44, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }} >
          <Text style={styles.titleText}>neo1730</Text>
        </View>
        
        {/* <View style={styles.searchbar}>
          <TextInput
            underlineColorAndroid='transparent'
            placeholder='Enter BGG ID'
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmit}
          />
          <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
            <View style={{flex: 1}}>
              <Text>IS THIS YOU GAMER LIST</Text>
            </View>
            <View style={{height: 44, width: 44, backgroundColor: '#f7f7f7'}}></View>
            <View style={{height: 44, width: 44, backgroundColor: '#f7f7f7'}}></View>
          </View>
        </View> */}
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
