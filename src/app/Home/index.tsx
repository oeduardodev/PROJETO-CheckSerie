import { Image, View, TouchableOpacity, Text } from "react-native";
import { style } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";

export default function Home() {
  const FILTER_STATUS = [
    { status: FilterStatus.WATCHED, label: "Assistido" },
    { status: FilterStatus.NO_WATCH, label: "Não Assistido" },
  ];

  return (
    <>
      <View style={style.container}>
        <Image source={require("@/assets/logo.png")} style={style.logo} />
        <View style={style.form}>
          <Input placeholder="Quais series quer assistir?" />
          <Button title="Cadastro" />
        </View>
        <View style={style.content}>
          <View style={style.header}>
            {FILTER_STATUS.map((filter) => (
              <Filter
                key={filter.status}
                status={filter.status}
                isActive={filter.status === FilterStatus.WATCHED}
              />
            ))}
            <TouchableOpacity style={style.clearButton}>
              <Text style={style.TextClearButton}>Limpar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
