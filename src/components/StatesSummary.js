import React from "react";

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import StateDetails from "./StateDetails";

const StatesSummary = ({ statesSummaryRes }) => {
  return (
    <View>
      <FlatList
        data={statesSummaryRes}
        keyExtractor={(res) => res.fips}
        renderItem={({ item }) => {
          return (
            <View style={styles.containerStyle}>
              <StateDetails stateDetailsRes={item} />
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

export default StatesSummary;
