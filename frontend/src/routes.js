import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import PScan from './pages/PScan';
import PInfo from './pages/PInfo';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      PScan,
      PInfo,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#EA5276',
        },
        headerTintColor: '#FFF',

        headerTitle: 'Safee',
      },
    }
  )
);

export default Routes;
