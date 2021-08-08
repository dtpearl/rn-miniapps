import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from "react-native";

interface IStyledTouchableOpacityProps {
  children?: JSX.Element;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  style?: StyleProp<ViewStyle>;
}

const StyledTouchableOpacity = (
  props: IStyledTouchableOpacityProps
): JSX.Element | null => {
  const { children, onPress, style } = props;
  if (!children) return null;
  return (
    <TouchableOpacity
      onPress={onPress ? (e: GestureResponderEvent) => onPress(e) : undefined}
      style={style ? style : styles.elementStyle}
    >
      {children ? children : null}
    </TouchableOpacity>
  );
};

export default StyledTouchableOpacity;

const styles = StyleSheet.create({
  elementStyle: {
    display: "flex",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 4,
    paddingVertical: 8,
    minWidth: 150,
  },
});
