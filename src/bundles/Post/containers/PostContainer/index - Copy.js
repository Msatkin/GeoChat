/* @flow */

import React, {Component} from 'react';
import {View, Text, Picker, TextInput, KeyboardAvoidingView} from 'react-native';
import connect from './connect';
import styles from './styles';
import Title from '@components/Title';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class PostContainer extends Component {

    props : Props;

    render() {
        let textStyle;
        if (160 - this.props.post.message.length !== 0) {
            textStyle = styles.blue_text;
        } else {
            textStyle = styles.red_text;
        }
        return (
            <View style={styles.main}>
                <View style={styles.main_center}>
                    <View style={styles.top}>
                        <Picker
                            style={styles.expiration_delay_picker}
                            selectedValue={this.props.post.delay}
                            onValueChange={(delay) => this.props.setDelay(delay)}>
                            <Picker.Item label="Message will expire in 1 day" value="1"/>
                            <Picker.Item label="Message will expire in 2 days" value="2"/>
                            <Picker.Item label="Message will expire in 3 days" value="3"/>
                            <Picker.Item label="Message will expire in 4 days" value="4"/>
                            <Picker.Item label="Message will expire in 5 days" value="5"/>
                            <Picker.Item label="Message will expire in 6 days" value="6"/>
                            <Picker.Item label="Message will expire in 7 days" value="7"/>
                        </Picker>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.text_entry_view}>
                            <TextInput
                                style={styles.message_entry}
                                editable={true}
                                multiline={true}
                                maxLength={160}
                                onChangeText={(text) => this.props.setMessage(text)}/>
                            <Text style={textStyle}>
                                {160 - this.props.post.message.length}
                                characters remaining</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default connect(PostContainer)
