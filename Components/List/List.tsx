import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './Style';

interface IProps {
  searchText: string;
}

const List = ({searchText}: IProps) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const axios = require('axios');

  const loadData = () => {
    axios
      .get('https://api.coinlore.net/api/tickers/')
      .then(function (response) {
        setData(response?.data?.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onPress = (id: any) => {
    if (id) {
      axios
        .get(`https://api.coinlore.net/api/ticker/?id=${id}`)
        .then(function (response) {
          // detailed view of the selected coin
          console.log('asd', response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    setLoading(false);
  };

  return (
    <FlatList
      data={data}
      refreshing={loading}
      onRefresh={() => {
        setLoading(true);
        loadData();
      }}
      nestedScrollEnabled={true}
      renderItem={coin => {
        if (coin?.item.name?.toLowerCase().includes(searchText.toLowerCase())) {
          return (
            <TouchableOpacity
              onPress={() => {
                setLoading(true);
                onPress(coin?.item.id);
              }}>
              <View key={coin.item.id} style={styles.row}>
                <Text style={styles.textName}>{coin?.item.name}</Text>
                <Text
                  style={
                    coin?.item.percent_change_24h > 0
                      ? styles.greenText
                      : styles.redText
                  }>
                  {coin?.item.percent_change_24h > 0 ? '+' : ''}
                  {coin?.item.percent_change_24h}%
                </Text>
                <Text style={styles.textPrice}>$ {coin?.item.price_usd}</Text>
              </View>
            </TouchableOpacity>
          );
        }
      }}
      keyExtractor={item => item.id}
    />
  );
};

export default List;
