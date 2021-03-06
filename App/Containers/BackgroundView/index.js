import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Metrics } from '../../Themes'
import { ScrollView, Text, Image, View, Animated } from 'react-native'
import Actions from '../../Redux/BackgroundRedux'
import { setUpdateFunc } from '../../Lib/BGControl'

// Styles
import styles from './styles'

export class BGView extends PureComponent {
  state = {
    height: new Animated.Value(Metrics.screenHeight / 2),
    // height: new Animated.Value(92),
    elevation: new Animated.Value(0)
  }

  componentDidMount () {
    setUpdateFunc('height', this.setHeight)
    setUpdateFunc('animatedHeight', this.animateToHeight)
    setUpdateFunc('elevation', this.setElevation)
  }
  animateToHeight = toValue =>
    Animated.timing(this.state.height, { toValue }).start()
  setHeight = height => this.state.height.setValue(height)
  setElevation = elevation => this.state.elevation.setValue(elevation)

  render () {
    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: this.state.height,
          zIndex: this.state.elevation,
          elevation: this.state.elevation,
          backgroundColor: 'black'
        }}
      />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  setHeightFunction: func => dispatch(Actions.setHeightFunction(func))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BGView)
