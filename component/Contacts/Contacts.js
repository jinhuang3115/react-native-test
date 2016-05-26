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

var t = require('tcomb-form-native');
var Form = t.form.Form;

var Gender = t.enums({
    male: '男',
    female: '女'
});


var Person = t.struct({
    'name': t.Str,              // a required string
    'company_name': t.Str,  // an optional string
    'mobile': t.Num, // a required number
});


var options = {
    fields: {
        name: {
            label: '姓名',
            placeholder: '填写姓名'
        },
        'company_name': {
            label: '公司名称'
        },
        mobile: {
            label: '联系电话',
            'error': '电话格式不正确'
        },
    }
}; // optional rendering options (see documentation)

export class Contacts extends Component {
    onPress() {
        var value = this.refs.form.getValue();
        if(value){
            fetch('http://127.0.0.1:3000/insertApply',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(value)
            })
                .then((response) => response.text())
                .then((responseText) => {
                    var info = JSON.parse(responseText);
                    this.setState({
                        list: info
                    })
                })
                .catch((error) => {
                    console.warn(error);
                });
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Form
                    ref="form"
                    type={Person}
                    options={options}
                />
                <TouchableHighlight style={styles.button} onPress={()=>this.onPress()} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});