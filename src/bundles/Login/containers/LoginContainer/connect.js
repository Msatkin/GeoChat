/* @flow */

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { changeUsername, changePassword } from '@store/modules/login';

const mapStateToProps = (state) => ({
  login: state.login,
})

const mapActionsToProps = { changeUsername, changePassword }

export default (container) => compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  )
)(container)
