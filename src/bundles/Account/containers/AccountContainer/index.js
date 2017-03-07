/* @flow */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import connect from './connect';
import styles from './styles';
import Title from '@components/Title';

class AccountContainer extends Component {

    props : Props;

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.left}></View>

                <View style={styles.center}>
                    <View style={styles.main_center}>
                        <View style={styles.top}></View>

                        <View style={styles.center}>
                            <Title>Account</Title>
                        </View>

                        <View style={styles.bottom}></View>
                    </View>
                </View>

                <View style={styles.right}></View>
            </View>
        );
    }
}

export default connect(AccountContainer)
