// @flow

import { StackNavigator } from 'react-navigation';

import * as Pages from 'firstAppReactNative/src/pages';

export default StackNavigator({
  home: {
    screen: Pages.HomePage,
  }, 
  dashboard: {
    screen: Pages.Dashboard
  }
}, {
  initialRouteName: 'home',
});
