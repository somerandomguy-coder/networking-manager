import React from 'react';
import { Text, FlatList, StyleSheet } from "react-native";
import {hard_code_data} from "../networkings.js";
import { ProfileCard } from "../components/ProfileCard.tsx";

export default function NetworkPage() {
  return (
  <FlatList data={hard_code_data} renderItem={({item}) => (<ProfileCard name={item.name} relationship={item.relationship} />)} />
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
