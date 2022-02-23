import React from 'react';
import TodoList from './src/TodoList';
import Signup from './src/Signup'
import { View ,Text,StyleSheet} from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
 
    <TodoList />
    {/* <Signup /> */}
    </View>
 
  )

}
const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  lett:{
    marginTop:20
  }
});