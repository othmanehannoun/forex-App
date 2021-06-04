import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'



const HomeScreen = ({navigation,route}) => {
    const [uri, setUri] = React.useState('');
    let {user} = route.params;
    return (

        <>
        <View style={styles.container}>
    <TouchableOpacity
            onPress={() =>
              setUri("https://www.tradingview.com/chart/?symbol=FX%3AGBPUSD")
            }
            style={{
              backgroundColor: "#FFB833",
              alignItems: "center",
              padding: 10,
              borderRadius: 5,
              margin: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
              }}
            >
            GBPUSD
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setUri("https://www.tradingview.com/chart/?symbol=FX%3AEURUSD")
            }

            style={{
              backgroundColor: "#FFB833",
              alignItems: "center",
              padding: 10,
              borderRadius: 5,
              margin: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
              }}
            >
              EURUSD
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => 
            setUri(
                "https://www.tradingview.com/chart/?symbol=USDJPY"
            )
            }
            style={{
              backgroundColor: "#FFB833",
              alignItems: "center",
              padding: 10,
              borderRadius: 5,
              margin: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
              }}
            >
              USDJPY
            </Text>
          </TouchableOpacity>
         

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('devise',{user:user})
            }
            style={{
              backgroundColor: "#FFB833",
              alignItems: "center",
              padding: 10,
              borderRadius: 5,
              margin: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
              }}
            >
            Devise
            </Text>
          </TouchableOpacity>

          </View>


        <WebView
        source={{ uri: uri}}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
        javaScriptEnabled
          domStorageEnabled
          allowFileAccessFromFileURLs
          startInLoadingState
          originWhitelist={['*']}
          mixedContentMode="compatibility"
      />

</>
    )
}

export default HomeScreen


const styles=StyleSheet.create({
    container:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginRight: 5,
        marginTop: 8,
        marginBottom: 18,
      },
})