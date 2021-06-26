import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context } from "../context/AllStatesContext";
import StatesSummary from "../components/StatesSummary";
import SearchBar from "../components/SearchBar";

const IndexScreen = ({ navigation }) => {
  const { state, getCovidDataStatesSummary } = useContext(Context);
  const [filteredList, setFilteredList] = useState(null);
  const [term, setTerm] = useState("");

  const termChange = (term) => {
    setTerm(term);
    if (term.length > 0) {
      filterList(term.toLowerCase());
    } else {
      setFilteredList(state.StatesSummary);
    }
  };

  const filterList = (searchTerm) => {
    const resp = state.StatesSummary.filter((res) => {
      return res.state.toLowerCase().indexOf(searchTerm) !== -1;
    });
    setFilteredList(resp);
  };

  useEffect(() => {
    // console.log("Executing useEffect");
    getCovidDataStatesSummary();
    const listener = navigation.addListener("focus", () => {
      setTerm(null);
      console.log("Fetch County Summary on Focus");
      getCovidDataStatesSummary();
    });
    return listener;
  }, [navigation]);

  //Update Filtered list when State Updates
  useEffect(() => {
    if (state && state.StatesSummary) {
      setFilteredList(state.StatesSummary);
    }
  }, [state]);

  //console.log("State Summary ->", state.StatesSummary);
  return (
    <View>
      <SearchBar term={term} onTermChange={(newTerm) => termChange(newTerm)} />
      <StatesSummary statesSummaryRes={filteredList} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
