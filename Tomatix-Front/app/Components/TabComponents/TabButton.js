import { useEffect, useRef } from "react";
import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import Material from "react-native-vector-icons/MaterialCommunityIcons";

export default ({ item, accessibilityState, onPress }) => {
  const animatedValues = {
    translate: useRef(new Animated.Value(0)).current,
    scale: useRef(new Animated.Value(0)).current,
  };

  const { translate, scale } = animatedValues;

  useEffect(() => {
    handleAnimated();
  }, [accessibilityState.selected]);

  const handleAnimated = () => {
    Animated.parallel([
      Animated.timing(translate, {
        toValue: accessibilityState.selected ? 1 : 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(scale, {
        toValue: accessibilityState.selected ? 1 : 0,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const translateStyles = {
    transform: [
      {
        translateY: translate.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -30],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  const scaleStyles = {
    opacity: scale.interpolate({
      inputRange: [0.5, 1],
      outputRange: [0.5, 1],
      extrapolate: "clamp",
    }),
    transform: [
      {
        scale: scale,
      },
    ],
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Animated.View style={[styles.button, translateStyles]}>
        <Animated.View
          style={[
            {
              width: 50,
              height: 50,
              borderRadius: 100,
              position: "absolute",
              backgroundColor: "#00d7aa",
            },
            scaleStyles,
          ]}
        />
        <Material
          name={item.icon}
          color={accessibilityState.selected ? "#fff" : "#19171f"}
          size={25}
        />
      </Animated.View>
      <Animated.Text style={[styles.title, { opacity: scale }]}>
        {item.title}
      </Animated.Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    alignSelf: "stretch",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#004f4a",
    position: "absolute",
    bottom: 20,
  },
});
