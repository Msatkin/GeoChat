/* @flow */

import { AppRegistry } from 'react-native'
import Kernel from '@core'

import Reactotron from 'reactotron-react-native'

Reactotron
  .configure() // we can use plugins here -- more on this later
  .connect() // let's connect!

AppRegistry.registerComponent('App', () => Kernel)
