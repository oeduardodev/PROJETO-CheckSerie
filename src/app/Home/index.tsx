import { Image, View } from "react-native";
import { style } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";

export default function Home() {
  return (
    <>
      <View style={style.container}>
        <Image source={require("@/assets/logo.png")} style={style.logo} />
        <View style={style.form}>
          <Input placeholder="Quais series quer assistir?" />
          <Button title="Cadastro" />
        </View>
        <View style={style.content}>
          <Filter status={FilterStatus.WATCHED} isActive={true}></Filter>
          <Filter status={FilterStatus.NO_WATCH} isActive={false}></Filter>
        </View>
      </View>
    </>
  );
}
