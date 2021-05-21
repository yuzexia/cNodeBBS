/*
 * @Author: yuze.xia 
 * @Date: 2021-05-21 14:45:41 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2021-05-21 16:54:13
 */
import React from 'react';
import { View, Button } from '@tarojs/components';

class Detail extends React.Component{
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
    
    onChangeBatText(e) {
        wx.setNavigationBarTitle({
            title: '详情'
        })
    }
    render() {
        return(
            <View>
                <View>detail</View>
                <Button onClick={(e) => {this.onChangeBatText(e)}}>更改标题</Button>
            </View>
        )
    }
}

export default Detail;
