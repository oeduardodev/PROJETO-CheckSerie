import { View, Text, TouchableOpacity } from "react-native";
import { Trash2 } from "lucide-react-native";
import { FilterStatus } from "@/types/FilterStatus";
import { styles } from "./styles";
import { StatusIcon } from "../StatusIcon";

type ItemData = {
  status: FilterStatus;
  description: string;
};

type Props = {
  data: ItemData;
  onRemove?: () => void;
  onChangeStatus?: () => void;
};

export function Item({ data, onChangeStatus, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onChangeStatus}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>

      <Text style={styles.desciption}>{data.description}</Text>

      <TouchableOpacity activeOpacity={0.8}>
        <Trash2 size={18} color="#717b8dff" onPress={onRemove} />
      </TouchableOpacity>
    </View>
  );
}
