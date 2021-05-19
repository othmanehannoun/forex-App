import React from 'react'
import { Image , StyleSheet} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
          onDone={() => navigation.navigate("Login")}
            pages={[
                {
                backgroundColor: '#a6e4d0',
                image: <Image style={styles.img} source={require('../assets/img3.png')} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding',
                },

                {
                    backgroundColor: '#fdeb93',
                    image: <Image style={styles.img} source={require('../assets/img2.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },

                {
                    backgroundColor: '#e9bcbe',
                    image: <Image style={styles.img} source={require('../assets/img1.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                
            ]}
         />
    )
}



const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
  },
});

export default OnboardingScreen
