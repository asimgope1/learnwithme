// 

import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import { Link, useNavigation } from 'expo-router'

const index = () => {
  const navigation = useNavigation()
  return (
    // <BlueScreen />
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }}
    >
      <Text
      >index</Text>
      <Image source={require('../../assets/images/react-logo.png')} style={{
        alignSelf: 'center',
        width: 100,
        height: 100,
      }} />


      <Button
        title="Go to BlueScreen"
        onPress={() => navigation.navigate('BlueScreen')}
      />
    </View>
  )
}

export default index