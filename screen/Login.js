import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView ,TextInput} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {firebase} from '../firebase/config'
import FacebookSignin from './RéseauSocial';

const Login = ({navigation}) => {

    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [error, setError] = React.useState('');

    const login = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Home');
        } catch (err) {
            setError(err.message);
        }

    }

    return (
       <ScrollView style={styles.container}>
           <View style={styles.mainContainer}>
               <View>
               <LinearGradient 
                // Background Linear Gradient
                colors={['rgba(0,0,0,0.3)', 'transparent']}
                style={styles.header}
               >
                <Text 
                style={{fontSize: 24, fontWeight: 'bold', color: '#FFFF' }}>
                    Login
                </Text>
            </LinearGradient>
               
               </View>
               <View style={styles.inputContainer}>
               {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
              }
               <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="ADDRESS MAIL"

                />
                 <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="PASSWORD"

                />
               

                   <TouchableOpacity onPress={() => login()}
                   style={styles.submitContainer}>
                        <Text
                            style={
                                {
                                    color: "#FFF",
                                    fontWeight: "600",
                                    fontSize: 16
                                }
                            }
                        >
                            Login
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                      <Text 
                      style={
                        {
                            color: "#1abc9c",
                            fontWeight: "600",
                            marginTop: 30,
                            fontSize: 16
                        }
                    }
                    >
                        Already have an account? Sign In</Text>
                    </TouchableOpacity>

               </View>

               <View style={{ marginTop: 48, flexDirection: "row", justifyContent: "center" }}>
                        <FacebookSignin />
                </View>
           </View>
       </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },

  header: {
      width: '100%',
      height: 200,
      backgroundColor: '#f1c40f',
      justifyContent: "center",
      alignItems: 'center'
  },
  inputContainer:{
      padding: 20,
      backgroundColor: "#fff",
      shadowColor: "rgba(171, 180, 189, 0.35)",
      width: 310,
      height: 450,
      marginTop: -60,
      marginLeft: 25,
      borderRadius: 30,
      justifyContent: 'center'
  },
  
inputTitle: {
    color: "#ABB4BD",
    fontSize: 14
},

input: {
    paddingVertical: 12,
    padding: 10,
    color: "#1D2029",
    height: 40,
    margin: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(171, 180, 189, 0.65)",
  },
  submitContainer: {
    backgroundColor: "#f1c40f",
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(255, 22, 84, 0.24)",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
   
  
}
});

export default Login
