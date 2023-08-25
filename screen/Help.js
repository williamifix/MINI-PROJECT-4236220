import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import NavFooter from './navFooter'

export default function Help() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Not available. Contact System Admin</Text>

      <NavFooter/>
    </View>
  )
}

const styles = StyleSheet.create({})