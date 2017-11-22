// @flow

import { StyleSheet, Text, View } from 'react-native';
import theme from 'firstAppReactNative/src/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
  },
  image:{
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  title: {
    color: 'blue',
    marginTop: 5
  }, 
  descr: {
    fontSize: 14,
    paddingBottom: 5
  }
});
