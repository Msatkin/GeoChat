/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_TEXT_COLOR } from '@theme/colors'

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'row',
    },
    main_vertical: {
        flex: 1,
        flexDirection: 'column',
    },
    expiration_delay_picker: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    top: {
        flex: 1,
        backgroundColor: '#ff0000',
        justifyContent: 'flex-end',
    },
    bottom: {
        flex: 3,
        backgroundColor: '#00ff00',
        justifyContent: 'flex-end',
    },
    blue_text: {
        color: '#2d80cf'
    },
    red_text: {
        color: '#FF4C4C'
    },
    text_entry_view: {
        marginBottom: 15,
    },
    message_entry: {
        
    }
})

export default styles