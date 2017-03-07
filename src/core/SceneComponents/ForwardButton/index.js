import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './styles';
import forwardButtonImage from '@images/Buttons/forwardChevron.png';

const ForwardButton = (target) => {
    console.log(target);
    return (
        <View style={styles.button}>
                <Image source={forwardButtonImage} style={[styles.forwardButtonImage]}/>
        </View>
    )
}

export default ForwardButton