/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_TEXT_COLOR } from '@theme/colors'

const styles = StyleSheet.create({
    expiration_delay_picker: {
        marginTop: 10,
        flex: 1,
    },
    main: {
        flexDirection: 'row',
        flex: 1,
    },
    main_center: {
        flexDirection: 'column',
        flex: 1,
    },
    top: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end'
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
    },
    text_entry_view: {
        marginBottom: 25,
    },
    blue_text: {
        color: '#2d80cf'
    },
    red_text: {
        color: '#FF4C4C'
    },
    message_entry: {

    }
})

export default styles