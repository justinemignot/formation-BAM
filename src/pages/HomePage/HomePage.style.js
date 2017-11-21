// @flow

import { StyleSheet, Text, View } from 'react-native';
import theme from 'firstAppReactNative/src/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    ...theme.fonts.header,
    textAlign: 'center',
    margin: theme.grid.x1,
  },
  instructions: {
    ...theme.fonts.default,
    textAlign: 'center',
    color: theme.colors.darkGray,
    marginBottom: theme.grid.x1,
  },
  title: {
    textAlign: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 50,
    borderColor: 'green',
    borderWidth: 1,
    width: 100,
    alignSelf: 'center'
  }
});
