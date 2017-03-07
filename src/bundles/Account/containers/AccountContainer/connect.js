/* @flow */

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { accountFunctions } from '@store/modules/account';
import { globalActions } from '@store/modules/global';

const mapStateToProps = (state) => ({
  global: state.global,
  account: state.account,
})

const mapActionsToProps = Object.assign(accountFunctions, globalActions);

export default (container) => compose(
  connect(
    mapStateToProps,
    mapActionsToProps
  )
)(container)
