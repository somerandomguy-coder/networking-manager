import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style = {styles.container}>
      <Text>About Us:</Text>
      <Text>We're a one person team, developing something that is useful for me to notedown what's important about the people that i'm interact with</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
      flex: 1,
      gap: 10,
      paddingLeft: 40,
      paddingRight: 40,
      justifyContent: "center",
      alignItems: "center",
  }
});
