import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
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
        colors={["transparent", "rgb(24,24,27)"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className='flex justify-end pb-12 space-y-12'
      >
        <Animated.View className='flex items-center' entering={FadeInDown.delay(100).springify()}>
          <Text
            className='text-white font-bold tracking-wide'
            style={{ fontSize: hp(5) }}
          >
            Smart <Text className='text-orange-600'>Training</Text>
          </Text>
          <Text
            className='text-white font-bold tracking-wide'
            style={{ fontSize: hp(3) }}
          >
            Be <Text className='text-orange-600'>the best</Text> you
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            className='bg-orange-600 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200'
            style={{ height: hp(7), width: wp(80) }}
          >
            <Text
              className='text-white font-bold tracking-wide'
              style={{ fontSize: hp(3) }}
            >
              Get started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
