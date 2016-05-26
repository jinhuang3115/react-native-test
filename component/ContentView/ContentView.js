/**
 * Created by jin on 16/5/19.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Linking,
    Alert,
    AlertIOS,
    ScrollView,
    TouchableOpacity,
    Navigator
} from 'react-native';

export class ContentView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    这是一个测试页面
                </Text>
                <Text style={styles.instructions}>
                    测试首页
                </Text>
                <Text style={styles.instructions}>
                    显示个人信息内容
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 20,
        padding: 10,
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});