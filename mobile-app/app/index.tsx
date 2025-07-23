import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style = {styles.container}>
      <Text>Hello Jessie, I love you</Text>
      <Link href="/about" style = {styles.button}>
        About Us
      </Link>
      <Link href="/network" style = {styles.button}>
        Networks
      </Link>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
  },
  button: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#aeb1bc",
    borderRadius: 5
  }
});
