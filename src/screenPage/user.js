import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function User({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.row}>
        <View style={styles.container}> 
          <View>
            <TextInput
                placeholder="Find a GIF"
                style={styles.text}
                />
          </View>
        </View>        
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View 
            style={{
              backgroundColor: 'yellow',
              maxWidth: '100%', 
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 100,
              paddingRight: 100,
              borderRadius: 60,
            }}>
              <Text
                style={{fontSize:24}}
              >Select a GIF</Text>
          </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingBottom: 10,
  },
  container: {
    flex:1,
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInput: {
    borderStyle: 'solid'
  },

  text: {
    fontSize: 33,

  }
});