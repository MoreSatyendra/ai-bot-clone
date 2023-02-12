import React, { useCallback } from "react";
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
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Backdrop from "../../component/onboarding/Backdrop";
import Square from "../../component/onboarding/Square";
import { DATA } from "../../constants/Data";
import Indicator from "../../component/onboarding/Indicator";

const { width, height } = Dimensions.get("screen");

const Onboarding = ({ navigation }) => {
  const scrollx = React.useRef(new Animated.Value(0)).current;
  const [showButton, setShowButton] = React.useState(false);

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
      <Backdrop scrollx={scrollx} />
      <Square scrollx={scrollx} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        scrollEventThrottle={32}
        onMomentumScrollEnd={onScrollEnd}
        onMomentumScrollBegin={() => {
          setShowButton(false);
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollx } } }],
          { useNativeDriver: false }
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => {
          return (
            <View style={{ width, alignItems: "center", padding: 20 }}>
              <View
                style={{
                  flex: 0.7,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    width: width / 2,
                    height: width / 2,
                    resizeMode: "contain",
                    borderRadius: 15,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "Roboto-Bold",
                    fontSize: 24,
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontWeight: "300" }}>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollx={scrollx} />
      {showButton && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <View
            style={{
              backgroundColor: "transparent",
              width: width - 20,
              padding: 20,
              marginBottom: 15,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "white",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 18, color: "white" }}>
              Hop In
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
