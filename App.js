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
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Square from "./src/component/onboarding/Square";
import Backdrop from "./src/component/onboarding/Backdrop";
import { DATA } from "./src/constants/Data";
import Indicator from "./src/component/onboarding/Indicator";

const { width, height } = Dimensions.get("screen");

// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation
// https://twitter.com/mironcatalin/status/1321180191935373312

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/static/RobotoSlab-Bold.ttf"),
  });

  const scrollx = React.useRef(new Animated.Value(0)).current;

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar hidden />
      <Backdrop scrollx={scrollx} />
      <Square scrollx={scrollx} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        scrollEventThrottle={32}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
