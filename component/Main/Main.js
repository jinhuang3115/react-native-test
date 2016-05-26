/**
 * Created by jin on 16/5/9.
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
import NavigationBar from 'react-native-navbar';
import TableView from 'react-native-tableview';
import Swiper from 'react-native-swiper';
import {Container, Header, Content, Footer, Title, List, ListItem} from 'native-base';
const Section = TableView.Section;


import InitialScreen from '../InitialScreen/InitialScreen';
function renderScene(route, navigator) {
    return <route.component route={route} navigator={navigator} />;
}

export class Main extends Component {
    createList() {
        let list = [
            {
                name: 'Simon Mignolet'
            },
            {
                name: 'Nathaniel Clyne'
            },
            {
                name: 'Dejan Lovren'
            }
        ];
        return (
            list.map((obj, inx) => {
                return (
                    <TouchableOpacity onPress={(e)=>this._listClick(e, obj.name)} key={inx}>
                        <ListItem><Text>{obj.name}</Text></ListItem>
                    </TouchableOpacity>
                );
            })
        );
    }

    render() {
        const initialRoute = {
            component: InitialScreen
        };
        return (
            <View style={{flex:1}}>
                <Navigator
                    initialRoute={initialRoute}
                    renderScene={renderScene}/>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    wrapper: {},
    item: {

    },
    content: {
        marginTop: -20
    },
    list: {
        marginTop: 10
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        height: 150
    }
});