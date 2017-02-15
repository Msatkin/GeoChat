/* @flow */

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { changeUsername, changePassword, setLoginErrors, setLoginApiResponse } from '@store/modules/login';

const mapStateToProps = (state) => ({
  login: state.login,
})

const mapActionsToProps = { changeUsername, changePassword, setLoginErrors, setLoginApiResponse }

export default (container) => compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  )
)(container)
