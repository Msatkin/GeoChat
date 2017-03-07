/* @flow */

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { messagesFunctions } from '@store/modules/messages';
import { globalActions } from '@store/modules/global';

const mapStateToProps = (state) => ({
  global: state.global,
  messages: state.messages,
})

const mapActionsToProps = Object.assign(messagesFunctions, globalActions);

export default (container) => compose(
  connect(
    mapStateToProps,
    mapActionsToProps
  )
)(container)
