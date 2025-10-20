import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { style } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={style.container} activeOpacity={0.8} {...rest}>
      <Text style={style.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
