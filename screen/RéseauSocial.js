import React from 'react';
import {TouchableOpacity, Text, Alert, StyleSheet, Image} from 'react-native';
import * as Facebook from 'expo-facebook';

import * as Google from 'expo-google-app-auth';


// async function logInFb() {
//     try {
//       await Facebook.initializeAsync({
//         appId: '820654092196618',
//       });
//       const {
//         type,
//         token,
//         expirationDate,
//         permissions,
//         declinedPermissions,
//       } = await Facebook.logInWithReadPermissionsAsync({
//         permissions: ['public_profile'],
//       });
//       if (type === 'success') {
//         // Get the user's name using Facebook's Graph API
//         // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
//         // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
//         console.log('fachkaaaal had chi ');
//       } else {
//         // type === 'cancel'
//       }
//     } catch ({ message }) {
//       alert(`Facebook Login Error: ${message}`);
//     }
//   }


class FacebookSignin extends React.Component {
constructor(props) {
  super(props)

  this.state = {
     
  }

}


  signInGoogle = async()=> {

    try {
      const result = await Google.logInAsync({
        androidClientId: '952531014174-rn5fll5i9ni84doh83o8gbar07tghe1m.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        this.props.navigation.navigate('Home')
       
        
      } else {
        console.log('kaynchi plan');
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }
   render(){
    return (
      <>
      <TouchableOpacity style={styles.socialButton} 
         onPress={() => logInFb()}>
                       
          <Image source={require("../assets/facebook.png")} style={styles.socialLogo} />
          <Text style={styles.text}>Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}
       onPress={() => this.signInGoogle()}>
         <Image source={require("../assets/google.png")} style={styles.socialLogo} />
         <Text style={styles.text}>Google</Text>
      </TouchableOpacity>
  </>
  )
   }
}


const styles = StyleSheet.create({
    socialButton: {
        flexDirection: "row",
        marginHorizontal: 20,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(171, 180, 189, 0.65)",
        borderRadius: 4,
        backgroundColor: "#fff",
        shadowColor: "rgba(171, 180, 189, 0.35)",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 20,
    }
});
export default FacebookSignin