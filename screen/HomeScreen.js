import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import {
    LineChart
  } from 'react-native-chart-kit'

const HomeScreen = () => {
    return (
        
        <View style={{
           
            marginTop:40
        }}>
            <Text style={{marginBottom:20, textAlign:"center", 
                          fontWeight:'bold', fontSize: 20}}>
                Bezier Line Chart
            </Text>
           <LineChart
                data={{
                    labels:["Jan","Feb" ,"Mar","Apr","Mar","Apr"],
                    datasets: [
                        {
                            data: [
                                Math.random()*100,
                                Math.random()*100,
                                Math.random()*100,
                                Math.random()*100,
                                Math.random()*100,
                                Math.random()*100,
                            ],
                        },
                    ],
                }}
                width={Dimensions.get('window').width}
                height={400}
                yAxisSuffix='k'
                yAxisInterval={1}
                chartConfig={{
                    backgroundColor:"#FFF",
                    backgroundGradientFrom:"#FFF",
                    backgroundGradientTo:"#FFF",
                    decimalPlaces:2,
                    color:(opacity = 0) => `rgba(255,0,0, ${opacity})`,
                    labelColor:(opacity = 0) => `rgba(0,0,0, ${opacity})`,
                    style:{
                        borderRadius:16
                    },
                    propsForDots:{
                        r:'6',
                        strokeWidth:"2",
                        stroke:"red"
                    },
                }}
                bezier
                
                
           />
        </View>

    )
}

export default HomeScreen
