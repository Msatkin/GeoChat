/* @flow */

import React from 'react'
import { View } from 'react-native'
import PostContainer from '@Post/containers/PostContainer'
import styles from './styles'

const PostScene = () => {
  console.log('PostScene')
  return (
    <View style={styles.container}>
      <PostContainer />
    </View>
  )
}

export default PostScene
