import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { DATA } from "../../constants/Data";
import Indicator from "../../component/onboarding/Indicator";

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const Onboarding = ({ navigation }) => {
  const scrollx = React.useRef(new Animated.Value(0)).current;
  const [value, setValue] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const onScrollEnd = (event) => {
    if (event.nativeEvent.contentOffset.x === width * (DATA.length - 1)) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        data={DATA}
        horizontal
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollx } } }],
          { useNativeDriver: true }
        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        onMomentumScrollBegin={() => {
          setShowButton(false);
        }}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const translateX = scrollx.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });
          return (
            <View
              style={{
                width,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "Roboto-Bold",
                  marginBottom: 20,
                }}
              >
                {item.title}
              </Text>
              <View
                style={{
                  width: ITEM_WIDTH + 60,
                  height: ITEM_HEIGHT,
                  overflow: "hidden",
                  borderRadius: 18,
                  borderWidth: 5,
                  borderColor: `white`,
                }}
              >
                <Animated.Image
                  source={item.image}
                  style={{
                    width: ITEM_WIDTH * 1.4,
                    height: ITEM_HEIGHT,
                    alignSelf: "center",
                    resizeMode: "cover",
                    transform: [
                      {
                        translateX,
                      },
                    ],
                  }}
                />
              </View>
              <View style={{ alignItems: "center" }}>
                <Indicator scrollx={scrollx} />
              </View>
              <Text
                style={{
                  color: "grey",
                  textAlign: "center",
                  marginTop: 30,
                  marginHorizontal: 20,
                }}
              >
                {item.description}
              </Text>
            </View>
          );
        }}
      />
      {showButton && (
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 30,
            backgroundColor: "black",
            position: "absolute",
            bottom: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderColor: "grey",
            elevation: 32,
            shadowColor: `#00ffff`,
            shadowOpacity: 0.3,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "white", marginHorizontal: 10 }}>Hop In</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
