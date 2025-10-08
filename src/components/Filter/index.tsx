import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { style } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";
import { CircleCheck } from "lucide-react-native";
import { StatusIcon } from "../StatusIcon";

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
      <StatusIcon status={status} />

      <Text style={style.text}>
        {status === FilterStatus.WATCHED ? "Assistido" : "Não Assistido"}
      </Text>
    </TouchableOpacity>
  );
}
