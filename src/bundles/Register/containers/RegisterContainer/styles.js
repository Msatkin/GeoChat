/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_TEXT_COLOR } from '@theme/colors'

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        flex: 1,
    },
    main_center: {
        flexDirection: 'column',
        flex: 1,
    },
    top: {
        flex: 2,
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
    left: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    right: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    error: {
        color: 'red',
    },
    error_view: {
        alignItems: 'center',
    }
})

export default styles