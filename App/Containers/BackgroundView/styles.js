import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.bg
  },

})
