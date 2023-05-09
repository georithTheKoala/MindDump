import { View, Image, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

export default function Detail({route, navigation}) {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image 
              style={{width: 400, height: 300}}
              source={{uri:route.params.data.images.fixed_height.url}}
            />
            <View style={{ flex: 3, marginTop: 25, marginBottom: 120, marginLeft: 36, marginRight: 36 }}>
              <Text style={{ fontSize: 30, fontWeight: 600 }}>{route.params.data.title}</Text>
              <Text style={{ fontSize: 16 }}>{route.params.data.import_datetime}</Text>
              <Text style={{ fontSize: 20, marginTop:20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}