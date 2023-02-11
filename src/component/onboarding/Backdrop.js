import { Animated, Dimensions, StyleSheet } from "react-native";
import { bgs } from "../../constants/Data";

const { width, height } = Dimensions.get("screen");

const Backdrop = ({ scrollx }) => {
  const backgroundColor = scrollx.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, { backgroundColor }]}
    />
  );
};

export default Backdrop;
