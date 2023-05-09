import React, { Component, useState } from 'react';
import { Text, View, TextInput, StyleSheet, Pressable, Button, Image } from 'react-native';


class Inputs extends Component {
  render() {
    return (
      <View style={styles.row}>
        <View style={styles.container}> 
          <View>
            <TextInput
                placeholder="Search"
                style={styles.text}
                />
          </View>
        </View>
        <View>
          <View style={{ flex:1, paddingTop:16 }}>
            <Image 
              source={require('../assets/close.png')} 
              style={{ width:30, height:30 }}
              />
          </View>
        </View>
        
      </View>
    )
  }
}

export default Inputs;

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
    flex: 0.8,
    alignItems: 'flex-start',
  },
  textInput: {
    borderStyle: 'solid'
  },

  text: {
    fontSize: 33,

  }
});