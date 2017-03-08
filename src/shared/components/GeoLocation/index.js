var React = require('react');
var ReactNative = require('react-native');
import {globalActions} from '@store/modules/global';
import messageLoader from '@components/MessageLoader';
import {Store} from '@store/create';

const start = () => {
  console.log('actions', globalActions);
  navigator
    .geolocation
    .getCurrentPosition((position) => {
      Store.dispatch(globalActions.setLocation(position.coords.longitude, position.coords.latitude));
      messageLoader();
    }, (error) => alert(JSON.stringify(error)), {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000
    });
  Store.dispatch(globalActions.setWatchID(navigator.geolocation.watchPosition((position) => {
    Store.dispatch(globalActions.setLocation(position.coords.longitude, position.coords.latitude));
    messageLoader();
  })));
}

export default start