import React from "react";

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CountyDetails from "./CountyDetails";

const StateCountiesSummary = ({ stateCountiesRes }) => {
  return (
    <View>
      <FlatList
        data={stateCountiesRes}
        keyExtractor={(res) => res.fips}
        renderItem={({ item }) => {
          return (
            <View style={styles.containerStyle}>
              <CountyDetails CountiesRes={item} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 5,
  },
});

export default StateCountiesSummary;
