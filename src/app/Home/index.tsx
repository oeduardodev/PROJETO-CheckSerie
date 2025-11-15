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
import { useState, useEffect } from "react";
import { itemsStorage, ItemStorage } from "@/storage/itemsStorage";

export default function Home() {
  const [filter, setFilter] = useState<FilterStatus>(FilterStatus.NO_WATCH);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<ItemStorage[]>([]);

  const FILTER_STATUS = [
    { status: FilterStatus.WATCHED, label: "Assistido" },
    { status: FilterStatus.NO_WATCH, label: "Não Assistido" },
  ];

  async function handleAddItem() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", "Informe a descrição para adicionar.");
    }

    const newItem = {
      id: Math.random().toString().substring(2),
      description,
      status: FilterStatus.NO_WATCH,
    };

    await itemsStorage.addMyItem(newItem);
    await getItems();

    setFilter(FilterStatus.NO_WATCH);
    setDescription("");
    Alert.alert(
      "Parabéns",
      `Você adicionou ${newItem.description} à sua lista de séries.`
    );
  }

  async function getItems() {
    try {
      const response = await itemsStorage.get();
      setItems(response);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os itens.");
    }
  }

  async function handleRemoveItem(itemId: string) {
    try {
      await itemsStorage.removeItem(itemId);
      await getItems();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível remover o item.");
    }
  }

  async function handleToggleItemStatus(id: string) {
    try {
      await itemsStorage.toggleStatusItem(id);
      await getItems();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar o status do item.");
    }
  }

  function handleClearItems() {
    Alert.alert("Deletar", "Deseja realmente remover todos os itens?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: async () => {
          try {
            await itemsStorage.clearAllItens();
            setItems([]);
          } catch (error) {
            Alert.alert("Erro", "Não foi possível limpar os itens.");
          }
        },
      },
    ]);
  }

  useEffect(() => {
    getItems();
  }, []);

  const filteredItems = items.filter((item) => item.status === filter);

  return (
    <View style={style.container}>
      <Image source={require("@/assets/logo.png")} style={style.logo} />

      <View style={style.form}>
        <Input
          placeholder="O que você precisa assistir?"
          value={description}
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

          <TouchableOpacity
            style={style.clearButton}
            onPress={handleClearItems}
          >
            <Text style={style.TextClearButton}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredItems} // ✅ lista filtrada
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onRemove={() => handleRemoveItem(item.id)}
              onChangeStatus={() => handleToggleItemStatus(item.id)}
            />
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
