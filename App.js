import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Header from './src/components/Header';
import ListItem from './src/components/ListItem';
import AddItem from './src/components/AddItem';
import uuid from 'uuidv4';
const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const AddItem = text => {
    setItems(prevItems => {
      return [{id: uuid(), text}, ...prevItems];
    });
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem AddItem={AddItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
export default App;
