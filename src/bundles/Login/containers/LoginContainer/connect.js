/* @flow */

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { loginFunctions } from '@store/modules/login';
import { globalActions } from '@store/modules/global';

const mapStateToProps = (state) => ({
  global: state.global,
  login: state.login,
})

const mapActionsToProps = Object.assign(loginFunctions, globalActions);

export default (container) => compose(
  connect(
    mapStateToProps,
    mapActionsToProps
  )
)(container)
