
// import { Formik } from 'formik';
// import React ,{useState} from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   View,
//   FormInput,
//   TextInput,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import * as Yup from 'yup';
// const COLORS = {primary: '#1f145c', white: '#fff',blue:"#55BCF6"};

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [textInput, setTextInput] = useState();
//   const userinfo ={
//     input:"",
//   }

//   const validationSchema = Yup.object({
//     input:Yup.string().trim().min(3, 'Invalid name').required('please enter the text')
//   })
//     const addTodo = () => {
//     if (textInput == '') {
//       Alert.alert('Error', 'Please input todo');
//     } else {
//       const newTodo = {
//         id: Math.random(),
//         task: textInput,
//       };
//       setTodos([...todos, newTodo]);
//       setTextInput('');
//     }
//   };

//   const deleteTodo = todoId => {
//     const newTodosItem = todos.filter(item => item.id != todoId);
//     setTodos(newTodosItem);
//   };

//   const clearAllTodos = () => {
//     Alert.alert('Confirm', 'Clear todos?', [
//       {
//         text: 'Yes',
//         onPress: () => setTodos([]),
//       },
//       {
//         text: 'No',
//       },
//     ]);
//   };

//   const ListItem = ({todo}) => {
//     return (
//       <View style={styles.listItem}>
//         <View style={styles.itemleft}>
//         <View style={styles.square}>
//         </View>
     
//           <Text
//             style={{
//               fontWeight: 'bold',
//               fontSize: 15,
//               color: COLORS.primary,
//               textDecorationLine: todo?.completed ? 'line-through' : 'none',
//             }}>
//             {todo.task}
//           </Text>

//         </View>
       

        
//         <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
//           <View style={styles.actionIcon}>
//             <Icon name="delete" size={20} color="white" />
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   };
//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: 'white',
//       }}>
//       <View style={styles.header}>
//         <Text
//           style={{
//             fontWeight: 'bold',
//             fontSize: 20,
//             color: COLORS.primary,
//           }}>
//           TODO APP
//         </Text>
//         <Icon name="delete" size={25} color="black" onPress={clearAllTodos} />
//       </View>
//       <FlatList
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{padding: 20, paddingBottom: 100}}
//         data={todos}
//         renderItem={({item}) => <ListItem todo={item} />}
//       />

//       <View style={styles.footer}>
//         <View style={styles.inputContainer}>
//         <Formik initialValues={userinfo} validationSchema ={validationSchema}>
//           {
//             (values,handleChange)=>{
//               const {input} =values
//               return <>
//               <FormInput
//             value={input}
//             onChangeText={handleChange('input')}
//             placeholder="Add Todo"
//             // onChangeText={text => setTextInput(text)}
//           />
//               </>
//             }
//           }
//         </Formik>
       
//         </View>
//         <TouchableOpacity onPress={addTodo}>
//           <View style={styles.iconContainer}>
//             <Icon name="add" color="white" size={30} />
//           </View>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: COLORS.white,
//   },
//   inputContainer: {
//     height: 50,
//     paddingHorizontal: 20,
//     elevation: 40,
//     backgroundColor: COLORS.white,
//     flex: 1,
//     marginVertical: 20,
//     marginRight: 20,
//     borderRadius: 30,
//   },
//   itemleft:{
//     flexDirection: "row",
//     alignItems:'center',
//     flexWrap:'wrap',
//     flex:1,
//   },
//   square:{
//     width:24,
//     height:24,
//     backgroundColor:'#55BCF6',
//     opacity:0.4,
//     borderRadius:5,
//     marginRight:15,
//   },
//   iconContainer: {
//     height: 50,
//     width: 50,
//     backgroundColor: COLORS.blue,
//     elevation: 40,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   listItem: {
//     padding: 20,
//     backgroundColor: COLORS.white,
//     flexDirection: 'row',
//     elevation: 12,
//     borderRadius: 7,
//     marginVertical: 10,
//   },
//   actionIcon: {
//     height: 25,
//     width: 25,
//     backgroundColor: '#55BCF6',
//     justifyContent: 'center',
//     alignItems: 'center',
    
//     marginLeft: 5,
//     borderRadius: 3,
//   },
//   header: {
//     padding: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor:COLORS.blue
//   },
// });

// export default TodoList



import React ,{useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as yup from 'yup'
import { Formik } from 'formik'
const COLORS = {primary: '#1f145c', white: '#fff',blue:"#55BCF6"};

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [textInput, setTextInput] = useState('');
  const addTodo = () => {
    if (textInput == '') {
      Alert.alert('Error', 'Please input todo');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
      };
      setTodos([...todos, newTodo]);
      setTextInput('');
    }
  };

  const deleteTodo = todoId => {
    const newTodosItem = todos.filter(item => item.id != todoId);
    setTodos(newTodosItem);
  };

  const clearAllTodos = () => {
    Alert.alert('Confirm', 'Clear todos?', [
      {
        text: 'Yes',
        onPress: () => setTodos([]),
      },
      {
        text: 'No',
      },
    ]);
  };

  const ListItem = ({todo}) => {
    
    return (
      <View style={styles.listItem}>
        <View style={styles.itemleft}>
        <View style={styles.square}>
        </View>
     
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: COLORS.primary,
              textDecorationLine: todo?.completed ? 'line-through' : 'none',
            }}>
            {todo.task}
          </Text>

        </View>
       

        
        <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
          <View style={styles.actionIcon}>
            <Icon name="delete" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
  })
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: COLORS.primary,
          }}>
          TODO APP
        </Text>
        <Icon name="delete" size={25} color="black" onPress={clearAllTodos} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todos}
        renderItem={({item}) => <ListItem todo={item} />}
      />

      <View style={styles.footer}>
        <View style={styles.inputContainer}>
        {/* <Formik
          validationSchema={loginValidationSchema}
   initialValues={{ email: '' }}
   onSubmit={values => console.log(values)}>
   {({
     handleChange,
     handleBlur,
     handleSubmit,
     values,
     errors,
     isValid,
   }) => (
     <>
     <TextInput
       placeholder="Add Todo"
         name="email"
         placeholder="Email Address"
         style={styles.textInput}
         onChangeText={handleChange('email')}
         onBlur={handleBlur('email')}
         value={values.email}
          />
       {errors.email &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
       }
       <Button
         onPress={handleSubmit}
         title="LOGIN"
         disabled={!isValid}
       />
     </>
   )}

        </Formik> */}
       
        <TextInput
            value={textInput}
            placeholder="Add Todo"
            onChangeText={text => setTextInput(text)}
          />
       
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.iconContainer}>
            <Icon name="add" color="white" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  inputContainer: {
    height: 50,
    paddingHorizontal: 20,
    elevation: 40,
    backgroundColor: COLORS.white,
    flex: 1,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
  },
  itemleft:{
    flexDirection: "row",
    alignItems:'center',
    flexWrap:'wrap',
    flex:1,
  },
  square:{
    width:24,
    height:24,
    backgroundColor:'#55BCF6',
    opacity:0.4,
    borderRadius:5,
    marginRight:15,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.blue,
    elevation: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listItem: {
    padding: 20,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: '#55BCF6',
    justifyContent: 'center',
    alignItems: 'center',
    
    marginLeft: 5,
    borderRadius: 3,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:COLORS.blue
  },
});

export default TodoList