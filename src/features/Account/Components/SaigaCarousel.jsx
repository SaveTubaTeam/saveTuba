import React, { useRef } from "react";
import { View, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { StyleSheet } from "react-native";

const SAIGA_PICTURES = [
   require("../../../../assets/saiga-carousel/saiga_antelope1.jpg"),
   require("../../../../assets/saiga-carousel/saiga_antelope4.jpg"),
   require("../../../../assets/saiga-carousel/saiga_antelope5.jpg"),
   require("../../../../assets/saiga-carousel/saiga_antelope7.jpg"),
   require("../../../../assets/saiga-carousel/saiga_antelope8.jpg"),
];

//react-native-reanimated-carousel resources: 
//https://dohooo.github.io/react-native-reanimated-carousel/
//https://github.com/dohooo/react-native-reanimated-carousel/blob/main/example/app/src/pages/stack/index.tsx

export default function SaigaCarousel() {
   const data = useRef([...new Array(5).keys()]).current;
 
   return (
     <View style={{ flex: 1 }}>
       <Carousel
         style={styles.carouselContainer}
         width={275}
         height={350}
         pagingEnabled={true}
         snapEnabled={true}
         mode={"horizontal-stack"}
         loop={true}
         autoPlay={true}
         autoPlayInterval={2000}
         autoPlayReverse={true}
         data={data}
         modeConfig={{ snapDirection: "right", stackInterval: 18 }}
         customConfig={() => ({ type: "positive", viewCount: 4 })}
         renderItem={({ index }) => (
            <View
               key={index}
               style={styles.cardContainer}
            >
               <Image 
                  source={SAIGA_PICTURES[index]}
                  style={styles.saigaImage}
                  fadeDuration={100}
               />
            </View>
         )}
       />
      </View>
   )
}

const styles = StyleSheet.create({
   carouselContainer: {
      alignItems: "center",
      justifyContent: "center",
      padding: 200,
      marginTop: 10,
   },
   cardContainer: {
      width: "100%",
      height: "100%",
      backgroundColor: "#F5F5DC",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
   },
   saigaImage: {
      width: "100%", 
      height: "100%", 
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "#808080",
   }
})