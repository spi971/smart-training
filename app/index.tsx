import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import {
heightPercentageToDP as hp,
widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Index() {
  return (
    <View className='flex-1 flex justify-end'>
      <StatusBar />
      <Image
        className='h-full w-full absolute'
        source={require("../assets/images/welcome.jpg")}
      />
      <LinearGradient
        colors={["transparent","rgb(24,24,27)"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className='flex justify-end pb-12 space-y-12'
      >
        <View className='flex items-center'>
          <Text className="text-white">Trainning Smart</Text>
        </View>
      </LinearGradient>
    </View>
  );
}
