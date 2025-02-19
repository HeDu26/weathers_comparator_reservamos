import React from "react";
import { View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import getNext7Days from "../../../../utils/daysCalculator";

const newDays = getNext7Days();

const WeatherGraph = () => {
  const place1Temps = [25, 28, 30, 32, 29, 27, 26]; // Temperatures for Place 1
  const place2Temps = [22, 24, 26, 28, 27, 25, 23]; // Temperatures for Place 2

  const data = {
    labels: newDays, // X-axis labels (days)
    datasets: [
      {
        data: place1Temps, // Y-axis data for Place 1
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red line for Place 1
        strokeWidth: 2, // Line thickness
      },
      {
        data: place2Temps, // Y-axis data for Place 2
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Blue line for Place 2
        strokeWidth: 2, // Line thickness
      },
    ],
  };

  return (
    <View>
      <LineChart
        data={data}
        width={400} // Width of the chart
        height={300} // Height of the chart
        yAxisLabel="" // Optional: Add a label for the Y-axis
        yAxisSuffix="°C" // Add °C to Y-axis values
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 1, // Number of decimal places for Y-axis values
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Color of labels
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "4", // Dot radius
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier // Smooth line curve
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default WeatherGraph;
