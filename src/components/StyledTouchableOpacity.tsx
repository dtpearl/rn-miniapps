import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";

interface IStyledTouchableOpacityProps {
  children?: JSX.Element;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const StyledTouchableOpacity = (
  props: IStyledTouchableOpacityProps
): JSX.Element | null => {
  const { children, onPress } = props;
  if (!children) return null;
  return (
    <TouchableOpacity
      onPress={onPress ? (e: GestureResponderEvent) => onPress(e) : undefined}
      style={styles.elementStyle}
    >
      {children ? children : null}
    </TouchableOpacity>
  );
};

export default StyledTouchableOpacity;

const styles = StyleSheet.create({
  elementStyle: {},
});
