/*
 * @Author: yuze.xia 
 * @Date: 2021-05-21 14:45:41 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2021-05-21 16:27:55
 */
import React from 'react';
import { View,Text, Button } from '@tarojs/components';

class Center extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount () {
        console.log('component:::componentWillMount');
    }
    
    componentDidMount () {
        console.log('component:::componentDidMount');
        wx.setNavigationBarTitle({
            title: '我的'
        })
    }
    
    componentWillUnmount () {
        console.log('component:::componentWillUnmount');
    }
    
    componentDidShow () {
        console.log('component:::componentDidShow');
    }
    
    componentDidHide () {
        console.log('component:::componentDidHide');
    }
    
    onSubmit(e) {
        console.log(e);
    }
    onChangeBatText(e) {
        wx.setNavigationBarTitle({
            title: 'xxxxxx'
        })
    }
    render() {
        return(
            <View>
                <View>个人中心</View>
                <Text>页面</Text>
                <Button onTap={(e) => {this.onChangeBatText(e)}}>更改标题</Button>
                <Button onTap={(e) => {this.onSubmit(e)}}>登录</Button>
            </View>
        )
    }
}

export default Center;
