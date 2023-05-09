import React, {useEffect, useState} from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

const List = () => {
  
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
    <>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          {data && data.map( (item, index) => {
            return (
            <>
              {/* {console.log(item)} */}
              <View style={styles.cards}>
                <View styles={styles.imageContainer}>
                  {/* Test */}
                  {/* <Image 
                    style={styles.image}
                    source={{uri:item.images.fixed_height.url}}
                  /> */}
                </View>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.dateTime}>{item.import_datetime}</Text>
                </View>
              </View>
            </>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 400, 
    height: 400,
    alignContent: 'center',
  },
  imageContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cards: {
    borderRadius: 20,
    borderColor: '#aaaaaa',
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  dateTime: {
    fontSize: 12,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  }
});

export default List;r