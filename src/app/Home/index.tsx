import {
  Image,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import { style } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";

export default function Home() {
  const FILTER_STATUS = [
    { status: FilterStatus.WATCHED, label: "Assistido" },
    { status: FilterStatus.NO_WATCH, label: "Não Assistido" },
  ];
  const dataList = [
    { status: FilterStatus.WATCHED, description: "Stranger Things" },
    { status: FilterStatus.WATCHED, description: "Breaking Bad" },
    { status: FilterStatus.WATCHED, description: "The Witcher" },
    { status: FilterStatus.WATCHED, description: "Game of Thrones" },
    { status: FilterStatus.WATCHED, description: "The Boys" },
    { status: FilterStatus.WATCHED, description: "The Crown" },
    { status: FilterStatus.WATCHED, description: "Money Heist" },
    { status: FilterStatus.WATCHED, description: "The Mandalorian" },
    { status: FilterStatus.WATCHED, description: "Dark" },
    { status: FilterStatus.WATCHED, description: "The Last of Us" },
    { status: FilterStatus.WATCHED, description: "Peaky Blinders" },
    { status: FilterStatus.WATCHED, description: "House of the Dragon" },
    { status: FilterStatus.WATCHED, description: "The Office" },
    { status: FilterStatus.WATCHED, description: "Better Call Saul" },
    { status: FilterStatus.WATCHED, description: "The Umbrella Academy" },
    { status: FilterStatus.WATCHED, description: "Vikings" },
    { status: FilterStatus.WATCHED, description: "Black Mirror" },
    { status: FilterStatus.WATCHED, description: "The Expanse" },
    { status: FilterStatus.WATCHED, description: "Loki" },
    { status: FilterStatus.WATCHED, description: "WandaVision" },
    { status: FilterStatus.WATCHED, description: "The Flash" },
    { status: FilterStatus.WATCHED, description: "Arrow" },
    { status: FilterStatus.WATCHED, description: "The Walking Dead" },
    { status: FilterStatus.WATCHED, description: "Squid Game" },
    { status: FilterStatus.WATCHED, description: "The 100" },
    { status: FilterStatus.WATCHED, description: "Shadow and Bone" },
    { status: FilterStatus.WATCHED, description: "Lost" },
    { status: FilterStatus.WATCHED, description: "Prison Break" },
    { status: FilterStatus.WATCHED, description: "Lucifer" },
    { status: FilterStatus.WATCHED, description: "Supernatural" },
    { status: FilterStatus.WATCHED, description: "The Good Place" },
    { status: FilterStatus.WATCHED, description: "Brooklyn Nine-Nine" },
    { status: FilterStatus.WATCHED, description: "The Handmaid’s Tale" },
    { status: FilterStatus.WATCHED, description: "Mr. Robot" },
    { status: FilterStatus.WATCHED, description: "Westworld" },
    { status: FilterStatus.WATCHED, description: "The Leftovers" },
    { status: FilterStatus.WATCHED, description: "The Morning Show" },
    { status: FilterStatus.WATCHED, description: "Dexter" },
    { status: FilterStatus.WATCHED, description: "Mindhunter" },
    { status: FilterStatus.WATCHED, description: "True Detective" },
    { status: FilterStatus.WATCHED, description: "Euphoria" },
    { status: FilterStatus.WATCHED, description: "House of Cards" },
    { status: FilterStatus.WATCHED, description: "The Blacklist" },
    { status: FilterStatus.WATCHED, description: "Sherlock" },
    { status: FilterStatus.WATCHED, description: "Suits" },
    { status: FilterStatus.WATCHED, description: "Homeland" },
    { status: FilterStatus.WATCHED, description: "How I Met Your Mother" },
    { status: FilterStatus.WATCHED, description: "Friends" },
    { status: FilterStatus.WATCHED, description: "Modern Family" },
    { status: FilterStatus.WATCHED, description: "Community" },
    { status: FilterStatus.WATCHED, description: "Rick and Morty" },
    { status: FilterStatus.WATCHED, description: "BoJack Horseman" },
    { status: FilterStatus.WATCHED, description: "Invincible" },
    { status: FilterStatus.WATCHED, description: "Arcane" },
    { status: FilterStatus.WATCHED, description: "Chainsaw Man" },
    { status: FilterStatus.WATCHED, description: "Attack on Titan" },
    { status: FilterStatus.WATCHED, description: "Fullmetal Alchemist" },
    { status: FilterStatus.WATCHED, description: "Death Note" },
    { status: FilterStatus.WATCHED, description: "Naruto" },
    { status: FilterStatus.WATCHED, description: "One Piece" },
    { status: FilterStatus.WATCHED, description: "Demon Slayer" },
    { status: FilterStatus.WATCHED, description: "Jujutsu Kaisen" },
    { status: FilterStatus.WATCHED, description: "Bleach" },
    { status: FilterStatus.WATCHED, description: "My Hero Academia" },
    { status: FilterStatus.WATCHED, description: "Tokyo Ghoul" },
    { status: FilterStatus.WATCHED, description: "Mob Psycho 100" },
    { status: FilterStatus.WATCHED, description: "Hunter x Hunter" },
    { status: FilterStatus.WATCHED, description: "Dragon Ball Z" },
    { status: FilterStatus.WATCHED, description: "Sailor Moon" },
    { status: FilterStatus.WATCHED, description: "Cowboy Bebop" },
    { status: FilterStatus.WATCHED, description: "The Originals" },
    { status: FilterStatus.WATCHED, description: "Legacies" },
    { status: FilterStatus.WATCHED, description: "Riverdale" },
    { status: FilterStatus.WATCHED, description: "Gossip Girl" },
    { status: FilterStatus.WATCHED, description: "Pretty Little Liars" },
    { status: FilterStatus.WATCHED, description: "The Vampire Diaries" },
    { status: FilterStatus.WATCHED, description: "Teen Wolf" },
    { status: FilterStatus.WATCHED, description: "13 Reasons Why" },
    { status: FilterStatus.WATCHED, description: "Outer Banks" },
    { status: FilterStatus.WATCHED, description: "Elite" },
    { status: FilterStatus.WATCHED, description: "You" },
    { status: FilterStatus.WATCHED, description: "The OA" },
    { status: FilterStatus.WATCHED, description: "Sense8" },
    { status: FilterStatus.WATCHED, description: "Altered Carbon" },
    { status: FilterStatus.WATCHED, description: "Upload" },
    { status: FilterStatus.WATCHED, description: "Severance" },
    { status: FilterStatus.WATCHED, description: "Foundation" },
    { status: FilterStatus.WATCHED, description: "The Peripheral" },
    { status: FilterStatus.WATCHED, description: "Snowpiercer" },
    { status: FilterStatus.WATCHED, description: "The Man in the High Castle" },
    { status: FilterStatus.WATCHED, description: "The Marvelous Mrs. Maisel" },
    {
      status: FilterStatus.WATCHED,
      description: "Only Murders in the Building",
    },
    { status: FilterStatus.WATCHED, description: "Ted Lasso" },
    { status: FilterStatus.WATCHED, description: "Shrinking" },
    { status: FilterStatus.WATCHED, description: "After Life" },
    { status: FilterStatus.WATCHED, description: "Fleabag" },
    { status: FilterStatus.WATCHED, description: "Barry" },
    { status: FilterStatus.WATCHED, description: "Silicon Valley" },
    { status: FilterStatus.WATCHED, description: "Veep" },
    { status: FilterStatus.WATCHED, description: "The Bear" },
    { status: FilterStatus.WATCHED, description: "Atlanta" },
    { status: FilterStatus.WATCHED, description: "Snowfall" },
    { status: FilterStatus.WATCHED, description: "Power" },
    { status: FilterStatus.WATCHED, description: "Empire" },
    { status: FilterStatus.WATCHED, description: "Succession" },
    { status: FilterStatus.WATCHED, description: "Billions" },
    { status: FilterStatus.WATCHED, description: "Yellowstone" },
    { status: FilterStatus.WATCHED, description: "Mayor of Kingstown" },
    { status: FilterStatus.WATCHED, description: "Tulsa King" },
    { status: FilterStatus.WATCHED, description: "Reacher" },
    { status: FilterStatus.WATCHED, description: "Jack Ryan" },
    { status: FilterStatus.WATCHED, description: "The Terminal List" },
    { status: FilterStatus.WATCHED, description: "NCIS" },
    { status: FilterStatus.WATCHED, description: "FBI" },
    { status: FilterStatus.WATCHED, description: "CSI: Vegas" },
    { status: FilterStatus.WATCHED, description: "Law & Order: SVU" },
    { status: FilterStatus.WATCHED, description: "Blue Bloods" },
    { status: FilterStatus.WATCHED, description: "Chicago P.D." },
    { status: FilterStatus.WATCHED, description: "Chicago Fire" },
    { status: FilterStatus.WATCHED, description: "9-1-1" },
    { status: FilterStatus.WATCHED, description: "Station 19" },
    { status: FilterStatus.WATCHED, description: "The Rookie" },
    { status: FilterStatus.WATCHED, description: "SWAT" },
    { status: FilterStatus.WATCHED, description: "Hawaii Five-0" },
    { status: FilterStatus.WATCHED, description: "MacGyver" },
    { status: FilterStatus.WATCHED, description: "Magnum P.I." },
    { status: FilterStatus.WATCHED, description: "Bones" },
    { status: FilterStatus.WATCHED, description: "Castle" },
    { status: FilterStatus.WATCHED, description: "Person of Interest" },
    { status: FilterStatus.WATCHED, description: "Elementary" },
    { status: FilterStatus.WATCHED, description: "Lie to Me" },
    { status: FilterStatus.WATCHED, description: "White Collar" },
    { status: FilterStatus.WATCHED, description: "Psych" },
    { status: FilterStatus.WATCHED, description: "Leverage" },
    { status: FilterStatus.WATCHED, description: "Burn Notice" },
    { status: FilterStatus.WATCHED, description: "The Mentalist" },
    { status: FilterStatus.WATCHED, description: "Grimm" },
    { status: FilterStatus.WATCHED, description: "Once Upon a Time" },
    { status: FilterStatus.WATCHED, description: "Supergirl" },
    { status: FilterStatus.WATCHED, description: "Titans" },
    { status: FilterStatus.WATCHED, description: "Doom Patrol" },
    { status: FilterStatus.WATCHED, description: "The Sandman" },
    { status: FilterStatus.WATCHED, description: "Good Omens" },
    { status: FilterStatus.WATCHED, description: "The Wheel of Time" },
    { status: FilterStatus.WATCHED, description: "His Dark Materials" },
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
          <FlatList
            data={dataList}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <Item
                data={{
                  status: item.status,
                  description: item.description,
                }}
                onChangeStatus={() => {}}
                onRemove={() => {}}
              />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={style.separator} />}
            contentContainerStyle={style.listContent}
            ListEmptyComponent={() => (
              <Text style={style.empty}>
                Você ainda não possui séries cadastradas.
              </Text>
            )}
          />
        </View>
      </View>
    </>
  );
}
