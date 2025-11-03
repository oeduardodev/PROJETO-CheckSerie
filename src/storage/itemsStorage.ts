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

async function getByStatus(status: FilterStatus): Promise<ItemStorage[]> {
  const allItems = await get();
  return allItems.filter((item) => item.status === status);
}

async function save(items: ItemStorage[]): Promise<void> {
  try {
    await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
  } catch (err) {
    throw new Error("Não foi possível salvar os itens." + err);
  }
}

async function addMyItem(newItem: ItemStorage): Promise<ItemStorage[]> {
  const items = await get();
  const updatedItems = [...items, newItem];
  await save(updatedItems);

  return updatedItems;
}

async function removeItem(itemId: string): Promise<void> {
  const items = await get();
  const filteredItems = items.filter((item) => item.id !== itemId);
  await save(filteredItems);
}

async function clearAllItens(): Promise<void> {
  try {
    await AsyncStorage.removeItem(ITEMS_STORAGE_KEY);
  } catch (err) {
    throw new Error("Não foi possível limpar os itens." + err);
  }
}

async function toggleStatusItem(itemId: string): Promise<void> {
  const items = await get();
  const updatedItems = items.map((item) =>
    item.id === itemId
      ? {
          ...item,
          status:
            item.status === FilterStatus.WATCHED
              ? FilterStatus.NO_WATCH
              : FilterStatus.WATCHED,
        }
      : item
  );
  await save(updatedItems);
}

export const itemsStorage = {
  get,
  getByStatus,
  addMyItem,
  removeItem,
  clearAllItens,
  toggleStatusItem,
};
