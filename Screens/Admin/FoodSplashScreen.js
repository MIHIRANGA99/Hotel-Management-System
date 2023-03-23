
import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import LottieView from 'lottie-react-native';
import Button from '../../Components/Button/Button'

const FoodSplashScreen =({navigation}) => {

  const [isReady, setIsReady] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  }, []);

  const hideSplashScreen = async () => {
    SplashScreen.hideAsync();
    setIsReady(true);
  };

  if (!isReady) {
    return (
      <View style={{ flex: 1 }}>
        <LottieView
          ref={animationRef}
          autoPlay
          source={require('../../assets/splashscreen.json')}
          loop={false}
          onAnimationFinish={hideSplashScreen}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems:"center", justifyContent:"center" }}>
      <Text style={{fontSize: 30 , paddingBottom:20,lineHeight: 40}}>Welcome to Food Menu</Text>
     

      <TouchableOpacity onPress={() => navigation.navigate("AddNewFood")}>
            <Text style={{fontSize: 20, backgroundColor:"#ffc55c",ineHeight: 40}}> Add New Food   </Text>
          </TouchableOpacity>
        

          <TouchableOpacity onPress={() => navigation.navigate("ManageAllFoodsMenu")}>
            <Text style={{fontSize: 20, backgroundColor:"#ffc55c",ineHeight: 40}}> Manage All Food Menu </Text>
          </TouchableOpacity>

    </SafeAreaView>
    
  );
};

export default FoodSplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
