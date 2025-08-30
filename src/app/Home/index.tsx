import { Image, View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <Input placeholder="Quais series quer assistir?" />
        <Button title="Cadastro" />
      </View>
    </>
  );
}
