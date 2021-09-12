import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Switch } from 'react-native-elements';
import LineChart from "react-native-chart-kit";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <StatusBar animated={true} backgroundColor="white" />

      <View style={{ backgroundColor: 'white', flex: 0.26 }}>

        <View style={{ flexDirection: 'row', flex: 1 }}>

          <View style={{ flex: 0.7, justifyContent: 'center', marginLeft: 30, marginTop: 15 }}>
            <Image
              source={require('../assets/perfil.jpg')}
              style={{ height: 70, width: 70, borderRadius: 30 }}
            />
            <Text style={{ marginTop: 10, fontSize: 15, fontWeight: 'bold' }}>Olá, Bruno</Text>
          </View>

          <View style={{ flex: 0.3, justifyContent: 'center', marginTop: 15, marginLeft: 15 }}>

            <Image
              source={require('../assets/eyes_hidden.png')}
              style={{ height: 30, width: 30, borderRadius: 30, marginLeft: 30, marginBottom: 60 }}
            />

          </View>
        </View>


      </View>


      <View style={{ backgroundColor: 'white', flex: 0.55, flexDirection: 'column' }}>

        <View style={{ flexDirection: 'column', flex: 1 }}>

          <View style={{ backgroundColor: 'white', flex: 0.5, height: 10, flexDirection: 'row', marginTop: 20 }}>

            <View style={{ flex: 0.8, justifyContent: 'center', marginLeft: 20 }}>
              <Text style={{ fontSize: 15 }}>Conta</Text>
              <Text style={{ fontSize: 20, fontFamily: 'comic-sans' }}>R$ 21.344,45</Text>
            </View>

            <View style={{ justifyContent: 'center', flex: 0.14 }} >
              <TouchableOpacity>
                <Image
                  source={require('../assets/seta-direita.png')}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </View>

          </View>

          <View>

            <View style={{ marginTop: 20, justifyContent: 'center', marginLeft: 10 }}>
              <Text>Entrada e saida</Text>
              <LineChart
                data={{
                  labels: ["January", "February", "March", "April", "May", "June"],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                      ]
                    }
                  ]
                }}
                width={340} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: "purple",
                  backgroundGradientFrom: "purple",
                  backgroundGradientTo: "black",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                    alignItems: 'center',

                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
              />
            </View>



          </View>

        </View>



      </View>

      <View style={{ backgroundColor: 'white', flex: 0.2 }}>

        <View style={{ flexDirection: 'row' }}>

          <View style={{ backgroundColor: 'white', flex: 0.7, height: 60, justifyContent: 'center' }}>
            <Text style={{ marginLeft: 50, fontWeight: 'bold', fontSize: 20 }}>Código da TAG</Text>
          </View>

          <View style={{ backgroundColor: 'white', flex: 0.3, height: 60, justifyContent: 'center' }}>
            <Switch
              value={true} />
          </View>
        </View>

        <View style={{ backgroundColor: 'rgba(74, 7, 74, 0.28)', flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>

          <View>
            <TouchableOpacity>
              <Text style={{ color: 'black', fontWeight: 'white', fontSize: 20}}>2342-5674-7894-3475</Text>
            </TouchableOpacity>
          </View>


        </View>
      </View>



    </View>
  );
}

const styles = StyleSheet.create({

  // iconTabRound: {
  //       width: 60,
  //       height: 60,
  //       borderRadius: 30,
  //       marginBottom: 20,
  //       flexDirection: 'row',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //       elevation: 6,
  //       shadowColor: '#9C27B0',
  //       shadowOffset: { width: 0, height: 2 },
  //       shadowOpacity: 0.2,
  //       shadowRadius: 5,
  //   }
});