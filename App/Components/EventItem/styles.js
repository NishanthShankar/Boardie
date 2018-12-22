import { Metrics, Colors, Fonts, ApplicationStyles } from '../../Themes'

export default {
  ...ApplicationStyles,
  container: {
    backgroundColor: Colors.snow,
    margin: Metrics.doubleBaseMargin,
    paddingBottom: 0,
    padding: Metrics.baseMargin,
    elevation: 3,
    zIndex: 3
  },
  expandedContainer: {
    position: 'absolute',
    paddingBottom: 0,
    elevation: 3,
    backgroundColor: '#fff8'
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 12
  },
  titleContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 68,
    top: 12,
    right: 12
  },
  title: {
    ...Fonts.style.medium,
    color: '#333'
  },
  number: {
    ...Fonts.style.h2,
    color: '#333'
  },
  date: {
    ...Fonts.style.h6,
    color: '#282828'
  },
  time: {
    ...Fonts.style.h7,
    color: '#282828'
  },
  location: {
    marginTop: 2,
    ...Fonts.style.h7,
    color: '#282828'
  },
  subTitle: {
    ...Fonts.style.description,
    color: '#888'
  },
  ctaContainer: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 12,
    bottom: 0,
    right: 12
  },
  logo: {
    position: 'absolute',
    top: 12,
    left: 12,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'blue',
    marginRight: 8
  },
  icon: {
    height: 24,
    width: 24,
    backgroundColor: '#eee',
    marginRight: 4
  }
}
