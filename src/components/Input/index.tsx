import { TextInput, TextInputProps } from "react-native";
import { style } from "./style";

export function Input({ ...rest }: TextInputProps) {
  return <TextInput style={style.container} {...rest} />;
}
