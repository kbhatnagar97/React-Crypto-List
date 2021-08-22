import React , {useState} from 'react';
import { View } from 'react-native';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import SearchBar from './Components/SearchBar/SearchBar';

const App = () => {
  const [searchText, setSearchText] = useState('')
  return (
    <View>
      <Header title='Crypto Currencies'/>
      <SearchBar search={(searchTextValue) => {setSearchText(searchTextValue)}}/>
      <List searchText={searchText}/>
    </View>
  ) 
};

export default App;
