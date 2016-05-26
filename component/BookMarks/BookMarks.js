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
import {Tab1} from '../Tab1/Tab1';
import {Tab2} from '../Tab2/Tab2';
import {Tab3} from '../Tab3/Tab3';
import {Tab4} from '../Tab4/Tab4';
import {Tab5} from '../Tab5/Tab5';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export class BookMarks extends Component {
    render(){
        return (
            <View style={styles.container}>
                <ScrollableTabView initialPage={0} renderTabBar={() => <ScrollableTabBar />}>
                    <Tab1 tabLabel="Tab1" />
                    <Tab2 tabLabel="Tab2" />
                    <Tab3 tabLabel="Tab3" />
                    <Tab4 tabLabel="Tab4" />
                    <Tab5 tabLabel="Tab5" />
                </ScrollableTabView>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
});