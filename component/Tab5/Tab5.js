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

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import TableView from 'react-native-tableview';
const Section = TableView.Section;
const Item = TableView.Item;

export class Tab5 extends Component {
    constructor(props) {
        super(props);
        this.state={
            list: []
        }
        fetch('http://127.0.0.1:3000/getSample')
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

    createList() {
        var {list} = this.state;
        var _list = [];

        for (var i = 0, len = list.length; i < len; i++){
            _list.push(<Item key={i} value={i} detail={'数量:' + list[i].num} style={styles.item}>{list[i].sample_name}</Item>);
        }
        return _list;
    }

    render(){
        var {list} = this.state;
        return (
            <View style={styles.container}>
                <TableView style={{flex:1,marginBottom:20}}
                           allowsToggle={true}
                           allowsMultipleSelection={true}
                           tableViewCellStyle={TableView.Consts.CellStyle.Value1}
                >
                    <Section label="样本">
                        {this.createList()}
                    </Section>
                </TableView>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});