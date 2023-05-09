import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Inputs from '../../Components/textInput';

export default function Home({navigation}) {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const results =  await axios.get('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: 'imYtTELwPDJCjQZ2etILp92rHvAghARv',
          limit: 10,
        }
      })

      setData(results.data.data)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 70}}>
      <Inputs style={{paddingBottom: 10}} />
      <TouchableOpacity onPress={() => navigation.navigate('User')}>
        <View>
          <View 
            style={{
              backgroundColor: 'yellow', 
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 50,
              paddingRight: 50,
              borderRadius: 60,
              position: 'relative'
            }}>
              <Text
                style={{fontSize:24}}
              >+ Mind Dump</Text>
          </View>
        </View>
      </TouchableOpacity>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          {data && data.map( (item, index) => {
            return (
            <>
              {/* {console.log(item)} */}
              
              <TouchableOpacity onPress={() => navigation.navigate('Detail', {data:item})}>
                <View style={styles.content}>
                  <View style={styles.cards}>
                    <View>
                      <Image 
                        style={styles.image}
                        source={{uri:item.images.fixed_height.url}}
                      />
                    </View>
                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.dateTime}>{item.import_datetime}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </>
            );
          })}
        </ScrollView>
      </SafeAreaView>
      {/* </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding:20
  },
  cards: {
    borderColor: '#aaaaaa',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: 400,
    height: 200,
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
  },
  dateTime: {
    fontSize: 12,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  }
});