/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    Animated
} from 'react-native';


import TabNavigator from 'react-native-tab-navigator';
import {Main} from '/Users/jin/webstorm-project/ReactNativeTest/component/Main/Main';
import {BookMarks} from '/Users/jin/webstorm-project/ReactNativeTest/component/BookMarks/BookMarks'
import {More} from '/Users/jin/webstorm-project/ReactNativeTest/component/More/More';
class ReactNativeTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'main',
            notifCount: 20,
            presses: 0,
        }
    }

    render() {
        return (
            <TabBarIOS
                tintColor="white"
                barTintColor="darkslateblue"
            >
                <TabBarIOS.Item
                    title="Blue Tab"
                    selected={this.state.selectedTab==='main'}
                    systemIcon="history"
                    badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                    onPress={()=>{
                this.setState({
                selectedTab: 'main',
                notifCount: 0
                });
                }}>
                    <Main />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Red Tab"
                    selected={this.state.selectedTab==='redTab'}
                    systemIcon="bookmarks"
                    onPress={()=>{
                this.setState({
                selectedTab: 'redTab'
                });
                }}>
                    <BookMarks />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Green Tab"
                    selected={this.state.selectedTab==='greenTab'}
                    systemIcon="more"
                    onPress={()=>{
                this.setState({
                selectedTab: 'greenTab'
                });
                }}>
                    <More />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
        marginTop: 200
    },
    tabText: {
        color: 'white',
        margin: 50,
        fontSize: 30
    },
});
AppRegistry.registerComponent('ReactNativeTest', () => ReactNativeTest);
