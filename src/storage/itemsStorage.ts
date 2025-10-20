import AsyncStorage from "@react-native-async-storage/async-storage";
import { FilterStatus } from "@/types/FilterStatus";

const ITEMS_STORAGE_KEY = "@assistir:items";

export type ItemStorage = {
  id: string;
  status: FilterStatus;
  description: string;
};

async function get(): Promise<ItemStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);
    return storage ? JSON.parse(storage) : [];
  } catch (err) {
    throw new Error("Não foi possível carregar os itens." + err);
  }
}

export const itemsStorage = {
  get,
};
