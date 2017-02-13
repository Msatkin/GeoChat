/* @flow */

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { changeEmail, changeUsername, changePassword, changeConfirmPassword } from '@store/modules/register';

const mapStateToProps = (state) => ({
  register: state.register,
})

const mapActionsToProps = { changeEmail, changeUsername, changePassword, changeConfirmPassword }

export default (container) => compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  )
)(container)
