import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  // ...ApplicationStyles,
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  searchbar: {
    elevation: 3,
    height: 48,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 4
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  itemTitle: {
    marginBottom: 24,
    fontSize: 24,
    marginLeft: 12,
    width: 88
  },
  titleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 56,
    justifyContent: 'center'
  }
})
