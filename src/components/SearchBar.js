import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange }) => {
  return (
    <View style={styles.backgroundStyle}>
      <EvilIcons name="search" size={50} />
      <TextInput
        style={styles.txtStyle}
        autoCapitalize={"none"}
        autoCorrect={false}
        placeholder="Search"
        value={term}
        /***** 
        // onChangeText = {(newTerm)=> onTermChange(newTerm)}
        // onEndEditing={() => onTermSubmit()}
      `
        Alternate shortcut for above two lines
        *****/
        onChangeText={onTermChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    //backgroundColor: '#F0EEEE',
    backgroundColor: "#c2bbbb",
    height: 50,
    borderRadius: 50,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  txtStyle: {
    marginLeft: 15,
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
  },
});

export default SearchBar;
