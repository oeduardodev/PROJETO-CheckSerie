import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { style } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";

type Props = TouchableOpacityProps & {
  status: FilterStatus;
  isActive: boolean;
};

export function Filter({ status, isActive, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[style.container, { opacity: isActive ? 1 : 0.5 }]}
      activeOpacity={0.8}
      {...rest}
    >
      <Text style={style.text}>
        {status === FilterStatus.WATCHED ? "Assistido" : "Não Assistido"}
      </Text>
    </TouchableOpacity>
  );
}
