import React from 'react';
import {View, Link,Text , StyleSheet } from "react-native";

export function ProfileCard({ name, relationship }) {
    return (
    <View style = {styles.screen}>
        <View style={styles.card}>
        	<Text>Avatar</Text> 
        	<View>
        	    <Text>{name}</Text>		
        	    <Text>{relationship}</Text>		
        	</View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create(
    {
	screen: {
	    justifyContent: "center",
	    alignItems: "center"
	},
	card: {

	    display: "flex",
	    flexDirection: "row",
	    gap: 6,
	}
    }
)
