/**
 * Created by jin on 16/5/18.
 */
import React from 'react-native';
const {
    Component,
    View,
    Text,
    StyleSheet,
    Navigator,
    Image,
    TouchableHighlight,
    Linking,
    } = React;
import NavigationBar from 'react-native-navbar';
import CustomScreen from '../CustomScreen/CustomScreen';
import TableView from 'react-native-tableview';
import Swiper from 'react-native-swiper';
const Section = TableView.Section;
const Item = TableView.Item;


export default class InitialScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    uri: 'http://c.hiphotos.baidu.com/image/w%3D310/sign=0dff10a81c30e924cfa49a307c096e66/7acb0a46f21fbe096194ceb468600c338644ad43.jpg',
                    text: 'Aussie tourist dies at Bali hotel',
                    link: 'www.baidu.com'
                },
                {
                    uri: 'http://a.hiphotos.baidu.com/image/w%3D310/sign=4459912736a85edffa8cf822795509d8/bba1cd11728b4710417a05bbc1cec3fdfc032374.jpg',
                    text: 'Big lie behind Nine’s new show',
                    link: 'www.qq.com'
                },
                {
                    uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=9a8b4d497ed98d1076d40a30113eb807/0823dd54564e9258655f5d5b9e82d158ccbf4e18.jpg',
                    text: 'Why Stone split from Garfield',
                    link: 'www.hbc315.com'
                },
                {
                    uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=2da0245f79ec54e741ec1c1f89399bfd/9d82d158ccbf6c818c958589be3eb13533fa4034.jpg',
                    text: 'Learn from Kim K to land that job',
                    link: 'www.taobao.com'
                }
            ],
            list:[]
        }
        fetch('http://127.0.0.1:3000/getApply')
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
    _click(e, link) {
        Linking.canOpenURL(link).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL('http://' + link);
            }
        }).catch(err => console.error('An error occurred', err));
    }
    createBanner() {
        let list = this.state.images;
        return list.map((obj, inx) => {
            return (
                <View style={styles.slide} key={inx}
                      title={<Text numberOfLines={1}>{obj.text}</Text>}>
                    <TouchableHighlight onPress={(e)=>this._click(e, obj.link)}>
                        <Image style={styles.image}
                               source={{uri: obj.uri}}/>
                    </TouchableHighlight>
                </View>
            );
        });
    }

    goSpec(e) {
        this.props.navigator.push({
            component: CustomScreen,
            title: e.label,
            mobile: e.detail,
            value: e.value
        });
    }

    createList() {
        var {list} = this.state;
        var _list = [];

        for (var i = 0, len = list.length; i < len; i++){
            _list.push(<Item key={i} value={i} detail={list[i].mobile.toString()} style={styles.item}>{list[i].name + " company:" + list[i]["company_name"]}</Item>);
        }
        return _list;
    }

    componentDidMount(){

    }

    render() {

        return (
            <View style={{ flex: 1, marginBottom:20}}>
                <NavigationBar
                    title={{ title: '测试首页', }}
                />
                <Swiper style={styles.wrapper} height={150}
                        dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                        activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                        paginationStyle={{
            bottom: -23, left: null, right: 10,
          }} loop={true} horizontal={true}>
                    {this.createBanner()}
                </Swiper>
                <TableView style={{flex:1,marginTop:10,marginBottom:15}}
                           allowsToggle={true}
                           allowsMultipleSelection={true}
                           tableViewCellStyle={TableView.Consts.CellStyle.Value1}
                           onPress={(event) => this.goSpec(event)}>
                    <Section label="Section 1" arrow={true}>
                        {this.createList()}
                    </Section>
                </TableView>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    wrapper: {

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