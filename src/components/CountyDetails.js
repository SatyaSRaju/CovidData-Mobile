import React from "react";
import { StyleSheet, View, Text } from "react-native";
//Needs to be added as  navaigation in param doesn't work - React Nav 5

const CountyDetails = ({ CountiesRes }) => {
  //Needs to be added as straight navaigation param doesn't work

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.stateStyle}>{CountiesRes.county}</Text>
      <Text style={styles.fieldsStyle}>
        Population: {CountiesRes.population}
      </Text>
      <Text style={styles.fieldsStyle}>
        Daily New Cases: {CountiesRes.metrics.caseDensity.toFixed(1)} Per 100k
      </Text>
      <Text style={styles.fieldsStyle}>
        Infection Rate: {CountiesRes.metrics.infectionRate}
      </Text>
      <Text>
        Positivity Test Ratio:
        {(CountiesRes.metrics.testPositivityRatio * 100).toFixed(1)} %
      </Text>
      <Text style={styles.fieldsStyle}>
        %Vaccinated:
        {(
          (CountiesRes.actuals.vaccinationsInitiated / CountiesRes.population) *
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
          <Text>{CountiesRes.actuals.hospitalBeds.capacity}</Text>
          <Text>{CountiesRes.actuals.hospitalBeds.currentUsageTotal}</Text>
          <Text>{CountiesRes.actuals.hospitalBeds.currentUsageCovid}</Text>
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
          <Text>{CountiesRes.actuals.icuBeds.capacity}</Text>
          <Text>{CountiesRes.actuals.icuBeds.currentUsageTotal}</Text>
          <Text>{CountiesRes.actuals.icuBeds.currentUsageCovid}</Text>
        </View>
      </View>
    </View>
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

export default CountyDetails;
