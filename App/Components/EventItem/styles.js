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
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 12
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    ...Fonts.style.h5,
    color: '#333'
  },
  number: {
    ...Fonts.style.h2,
    color: '#333'
  },
  date: {
    ...Fonts.style.h6,
    color: '#333',
    textAlign: 'right',
    marginBottom: 4
  },
  time: {
    marginLeft: 4,
    ...Fonts.style.h7,
    color: '#333',
    textAlign: 'right'
  },
  subTitle: {
    ...Fonts.style.description, 
    color: '#888'
  },
  ctaContainer: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    height: 24,
    width: 24,
    backgroundColor: '#eee',
    marginRight: 4
  }
}
