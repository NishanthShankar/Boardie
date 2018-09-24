import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'

export default class Touchable extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
  }

  render () {
    return (
      <TouchableOpacity activeOpacity={0.9} {...this.props}>
        {this.props.children}
      </TouchableOpacity>
    )
  }
}
