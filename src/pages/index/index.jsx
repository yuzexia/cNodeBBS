import { Component } from 'react'
import { View, Text, Navigator } from '@tarojs/components'

import Children from '@component/child.jsx';

import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () {
    console.log('componentWillUnmount:::');
   }
  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!!!!!</Text>
        <Navigator url='/pages/detail/index'>跳转详情页</Navigator>
        <Navigator url='/pages/test/index'>跳转测试页</Navigator>
        <Children />
      </View>
    )
  }
}
