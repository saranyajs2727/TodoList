// import React from 'react';
// import TodoList from './src/TodoList';
// import Signup from './src/Signup'
// import Hookform from "./src/Hookform"
// import { View ,Text,StyleSheet} from 'react-native';

// export default function App() {
  
//   return (
//     <View style={styles.container}>
 
//     <TodoList />
//     {/* <Signup /> */}
//     {/* <Hookform /> */}
//     </View>
 
//   )

// }
// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//   },
//   lett:{
//     marginTop:20
//   }
// });


import React,{useState} from 'react';
import './src/i18n/i18n';
import {View, Text,Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';

const App = () => {
	
const {t, i18n} = useTranslation();

const [currentLanguage,setLanguage] =useState('en');

const changeLanguage = value => {
	i18n
	.changeLanguage(value)
	.then(() => setLanguage(value))
	.catch(err => console.log(err));
};

return (
<View
		style={{
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		}}>
		<Text style={{fontWeight: 'bold', fontSize: 25, color: '#006400'}}>
		{t('hello')}{' '}
		</Text>
		<Text style={{fontWeight: 'bold', fontSize: 25, color: '#006400'}}>
		{t('welcome')}
		</Text>
		<Pressable
		onPress={() => changeLanguage('en')}
		style={{
			backgroundColor:
			currentLanguage === 'en' ? '#7CFC00' : '#d3d3d3',
			padding: 20,
		}}>
		<Text>Select English</Text>
		</Pressable>
    <Pressable
		onPress={() => changeLanguage('ta')}
		style={{
			backgroundColor:
			currentLanguage === 'ta' ? '#7CFC00' : '#d3d3d3',
			padding: 20,
		}}>
		<Text>தமிழ் தேர்ந்தெடுக்கவும்</Text>
		</Pressable>
		<Pressable
		onPress={() => changeLanguage('hi')}
		style={{
			backgroundColor:
			currentLanguage === 'hi' ? '#7CFC00' : '#d3d3d3',
			padding: 20,
		}}>
		<Text>हिंदी का चयन करें</Text>
		</Pressable>
		<Pressable
		onPress={() => changeLanguage('ko')}
		style={{
			backgroundColor:
			currentLanguage === 'ko' ? '#7CFC00' : '#d3d3d3',
			padding: 20,
		}}>
		<Text>korean</Text>
		
		</Pressable>
		<Pressable
		onPress={() => changeLanguage('ru')}
		style={{
			backgroundColor:
			currentLanguage === 'ru' ? '#7CFC00' : '#d3d3d3',
			padding: 20,
		}}>
		<Text>Russian</Text>
		
		</Pressable>
	</View>
);
};

export default App;
