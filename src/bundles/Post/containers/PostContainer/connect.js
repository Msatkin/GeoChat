/* @flow */

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { postFunctions } from '@store/modules/post';
import { globalActions } from '@store/modules/global';

const mapStateToProps = (state) => ({
  global: state.global,
  post: state.post,
})

const mapActionsToProps = Object.assign(postFunctions, globalActions);

export default (container) => compose(
  connect(
    mapStateToProps,
    mapActionsToProps
  )
)(container)
