/*
 * @Author: yuze.xia 
 * @Date: 2021-05-21 10:15:58 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2021-05-21 17:09:49
 */
import React from 'react';
import {View, Text, Button} from '@tarojs/components';

class Child extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            text: 'taro'
        }
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
    componentWillUpdate() {
        console.log('componentWillUpate');
    }
    componentDidUpdate(){
        console.log('componentDidUpate');
    }
    changeText(){
        console.log(wx.getStorageInfoSync());
        wx.setStorage({
            key: 'name',
            data: 'yuzexia'
        })
        this.setState({
            text: 'React'
        })
    }
    render(){
        return(
            <View>
                <Text>hello {this.state.text}!!!</Text>
                <Button onTap={(e) => {this.changeText(e)}}>点击</Button>
            </View>
        )
    }
}

export default Child;
