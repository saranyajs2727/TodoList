import React,{useState} from 'react';
import './i18n';
import {View, Text,Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';

const Changelang= () => {
	
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
		<Text style={{fontWeight: 'bold', fontSize: 25, color: '#33A850'}}>
		{t('hello')}{' '}
		</Text>
		<Text style={{fontWeight: 'bold', fontSize: 25, color: '#33A850'}}>
		{t('this line is translated')}
		</Text>
		<Pressable
		onPress={() => changeLanguage('en')}
		style={{
			backgroundColor:
			currentLanguage === 'en' ? '#33A850' : '#d3d3d3',
			padding: 20,
		}}>
		<Text>Select English</Text>
		</Pressable>
    <Pressable
		onPress={() => changeLanguage('ta')}
		style={{
			backgroundColor:
			currentLanguage === 'ta' ? '#33A850' : '#d3d3d3',
			padding: 20,
		}}>
		<Text>தமிழ் தேர்ந்தெடுக்கவும்</Text>
		</Pressable>
		<Pressable
		onPress={() => changeLanguage('hi')}
		style={{
			backgroundColor:
			currentLanguage === 'hi' ? '#33A850' : '#d3d3d3',
			padding: 20,
		}}>
		<Text>हिंदी का चयन करें</Text>
		</Pressable>
	</View>
);
};

export default Changelang;
