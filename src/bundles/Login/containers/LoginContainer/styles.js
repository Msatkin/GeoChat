/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_TEXT_COLOR } from '@theme/colors'

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        flex: 1,
    },
    top: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    center: {
        flex: 3,
        justifyContent: 'center',
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
})

export default styles