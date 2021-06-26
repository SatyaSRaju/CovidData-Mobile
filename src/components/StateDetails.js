import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
//Needs to be added as  navaigation in param doesn't work - React Nav 5
import { useNavigation } from "@react-navigation/native";
import CountieScreen from "../screens/CountiesScreen";

const StateDetails = ({ stateDetailsRes }) => {
  //Needs to be added as straight navaigation param doesn't work
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Counties", {
          res: stateDetailsRes.state,
        })
      }
    >
      <View style={styles.containerStyle}>
        <Text style={styles.stateStyle}>{stateDetailsRes.state}</Text>
        <Text style={styles.fieldsStyle}>
          Population: {stateDetailsRes.population}
        </Text>
        <Text style={styles.fieldsStyle}>
          Daily New Cases: {stateDetailsRes.metrics.caseDensity.toFixed(1)} Per
          100k
        </Text>
        <Text style={styles.fieldsStyle}>
          Infection Rate: {stateDetailsRes.metrics.infectionRate}
        </Text>
        <Text>
          Positivity Test Ratio:
          {(stateDetailsRes.metrics.testPositivityRatio * 100).toFixed(1)} %
        </Text>
        <Text style={styles.fieldsStyle}>
          %Vaccinated:
          {(
            (stateDetailsRes.actuals.vaccinationsInitiated /
              stateDetailsRes.population) *
            100
          ).toFixed(2)}
        </Text>
        <Text style={styles.bedHStyle}> Hospital Beds</Text>
        <View>
          <View style={styles.bedStyle}>
            <Text>Capacity</Text>
            <Text>Total</Text>
            <Text>Covid</Text>
          </View>
          <View style={styles.bedStyle}>
            <Text>{stateDetailsRes.actuals.hospitalBeds.capacity}</Text>
            <Text>
              {stateDetailsRes.actuals.hospitalBeds.currentUsageTotal}
            </Text>
            <Text>
              {stateDetailsRes.actuals.hospitalBeds.currentUsageCovid}
            </Text>
          </View>
        </View>
        <Text style={styles.bedHStyle}> ICU Beds</Text>
        <View>
          <View style={styles.bedStyle}>
            <Text>Capacity</Text>
            <Text>Total</Text>
            <Text>Covid</Text>
          </View>
          <View style={styles.bedStyle}>
            <Text>{stateDetailsRes.actuals.icuBeds.capacity}</Text>
            <Text>{stateDetailsRes.actuals.icuBeds.currentUsageTotal}</Text>
            <Text>{stateDetailsRes.actuals.icuBeds.currentUsageCovid}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    backgroundColor: "#c3c8cd",
    borderRadius: 10,
    marginHorizontal: 3,
  },

  stateStyle: {
    fontWeight: "bold",
    justifyContent: "center",
    borderWidth: 0.5,
    borderBottomColor: "black",
  },

  fieldsStyle: {
    borderWidth: 0.5,
    borderBottomColor: "black",
  },
  bedStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bedHStyle: {
    borderWidth: 0.5,
    borderBottomColor: "black",
    textAlign: "center",
  },
});

export default StateDetails;
