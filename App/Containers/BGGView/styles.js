import { StyleSheet } from 'react-native'
import { Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  // ...ApplicationStyles,
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  searchbar: {
    paddingHorizontal: 8,
    backgroundColor: '#fff',
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
  },
  gameName: {
    ...Fonts.style.h6,
    marginHorizontal: 4,
    textAlign: 'center',
    color: '#333'
  },
  titleText: {
    ...Fonts.style.h1,
    color: '#fff'
  },
  titlePreText: {
    ...Fonts.style.h6,
    color: '#fff',
    marginBottom: 4
  }
})
