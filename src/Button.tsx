import React, {ReactElement} from "react";
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const Button = ({
  onPress,
  title,
  disabled,
  style,
  color = ["blue"],
  textColor = "#fff",
}: {
  onPress: () => any;
  title: string;
  disabled?: boolean;
  style?: ViewStyle;
  color?: string[];
  textColor?: string;
}): ReactElement => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.touchable, disabled ? styles.disabled : null, style]}
      disabled={disabled}>
      <LinearGradient colors={color} start={{x: 0.0, y: 1}} end={{x: 0, y: 1.0}} useAngle style={styles.linearGradient}>
        <Text allowFontScaling={false} style={styles.text(textColor)}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: "65%",
    marginBottom: 10,
    alignSelf: "center",
    height: 55,
    borderRadius: 6,
  },
  linearGradient: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  text: (textColor: string) => ({
    fontFamily: "WorkSans-Medium",
    fontSize: 16,
    color: textColor,
  }),
  disabled: {
    opacity: 0.6,
  },
});
