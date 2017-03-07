var React = require('react');
var ReactNative = require('react-native');
import { setWatchID } from '@store/modules/global';
import { setLocation } from '@store/modules/global';
import { globalActions } from '@store/modules/global';
import messageLoader from '@components/MessageLoader'

const start = (store) => {
    console.log('actions', globalActions);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        store.dispatch(globalActions.setLocation(position.coords.longitude, position.coords.latitude));
        messageLoader(store, position.coords.longitude, position.coords.latitude)
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    store.dispatch(globalActions.setWatchID(navigator.geolocation.watchPosition((position) => {
      store.dispatch(globalActions.setLocation(position.coords.longitude, position.coords.latitude));
    })));
}

export default start