import {
  Image,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
} from "react-native";
import { style } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState<FilterStatus>(FilterStatus.NO_WATCH);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<any>([]);

  const FILTER_STATUS = [
    { status: FilterStatus.WATCHED, label: "Assistido" },
    { status: FilterStatus.NO_WATCH, label: "Não Assistido" },
  ];

  function handleAddItem() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", "Informe a descrição para adicionar.");
    }

    const newItem = {
      id: Math.random().toString().substring(2),
      description,
      status: FilterStatus.NO_WATCH,
    };

    setItems((prevState) => [...prevState, newItem]);

    console.log(newItem);
  }

  return (
    <View style={style.container}>
      <Image source={require("@/assets/logo.png")} style={style.logo} />

      <View style={style.form}>
        <Input
          placeholder="O que você precisa comprar?"
          onChangeText={setDescription}
        />
        <Button title="Adicionar" onPress={handleAddItem} />
      </View>

      <View style={style.content}>
        <View style={style.header}>
          {FILTER_STATUS.map((statusObj) => (
            <Filter
              key={statusObj.status}
              status={statusObj.status}
              isActive={filter === statusObj.status}
              onPress={() => setFilter(statusObj.status)}
            />
          ))}

          <TouchableOpacity style={style.clearButton}>
            <Text style={style.TextClearButton}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item data={item} onRemove={() => console.log("remover")} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={style.separator} />}
          contentContainerStyle={style.listContent}
          ListEmptyComponent={() => (
            <Text style={style.empty}>Nenhum item aqui.</Text>
          )}
        />
      </View>
    </View>
  );
}
