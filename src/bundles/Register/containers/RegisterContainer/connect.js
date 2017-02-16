/* @flow */

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { registerFunctions } from '@store/modules/register';
import { globalActions } from '@store/modules/global';

const mapStateToProps = (state) => ({
  global: state.global,
  register: state.register,
})

const mapActionsToProps = Object.assign(registerFunctions, globalActions);

export default (container) => compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  )
)(container)
