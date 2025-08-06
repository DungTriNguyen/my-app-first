import React from "react";
import { ScrollView, View, Image } from "react-native";
import movieDetailImg from "@/assets/items/detail.png"

const MovieDetail = () => {
  return (
    <View className="bg-[#030014]"> 
      <ScrollView>
        <Image source={movieDetailImg}/> 
      </ScrollView>
    </View>
  );
};

export default MovieDetail;
