import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import HomeScreen from '../Containers/HomeView'
import AddGames from '../Containers/AddGames'
import ProfileView from '../Containers/ProfileView'
import BGGView from '../Containers/BGGView'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    ProfileView: { screen: ProfileView },
    AddGames: { screen: AddGames },
    BGGView: { screen: BGGView }
  },
  {
    // Default config for all screens
    cardStyle: {
      backgroundColor: 'transparent'
    },
    transitionConfig: () => ({
      containerStyle: {
        backgroundColor: 'transparent'
      }
    }),
    headerMode: 'none',
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
)

export default PrimaryNav
