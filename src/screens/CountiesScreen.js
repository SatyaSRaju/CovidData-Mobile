import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import { Context } from "../context/AllStatesContext";
import SearchBar from "../components/SearchBar";
import StateCountiesSummary from "../components/StateCountiesSummary";

const CountiesScreen = ({ route, navigation }) => {
  //Fetch Params from Route
  const { res } = route.params;
  //State for All Counties data for passed US State
  const { state, getCovidDataStateCountiesSummary } = useContext(Context);
  //Local State Object for Filtering
  const [filteredList, setFilteredList] = useState(null);
  //State , SetState for SearchTerm
  const [term, setTerm] = useState("");

  //Function that gets executed on SearchBar Term change
  const termChange = (term) => {
    // On SearchBar Term change, set the Key In word.
    setTerm(term);
    //On change in word in SearchBar, Call Filter function
    if (term.length > 0) {
      console.log(term);
      filterList(term.toLowerCase());
    } else {
      setFilteredList(state.CountiesStateSummary);
    }
  };

  //Function for Filtering. Update locate state matching keywords on Searchbar
  const filterList = (searchTerm) => {
    const resp = state.CountiesStateSummary.filter((res) => {
      return res.county.toLowerCase().indexOf(searchTerm) !== -1;
    });
    setFilteredList(resp);
  };

  // React Hook to make API Call on Initialization of screen and on Focus
  useEffect(() => {
    getCovidDataStateCountiesSummary(res);
    const listener = navigation.addListener("focus", () => {
      console.log("Fetch State Summary on Focus");
      setTerm(null);
      getCovidDataStateCountiesSummary();
    });
    return listener;
  }, [navigation]);

  //React hook to update Local State Object upon State Changes. Initialized with data
  // fetched upon initialization
  useEffect(() => {
    console.log("Calling getCovidDataStateCountiesSummary with State ", res);
    if (state && state.CountiesStateSummary) {
      setFilteredList(state.CountiesStateSummary);
    }
  }, [state]);

  return state && state.CountiesStateSummary ? (
    <View>
      <SearchBar term={term} onTermChange={(newTerm) => termChange(newTerm)} />
      <StateCountiesSummary stateCountiesRes={filteredList} />
    </View>
  ) : null;
};

export default CountiesScreen;
