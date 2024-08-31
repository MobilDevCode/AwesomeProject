import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function App() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, Amanda</Text>
        <Text style={styles.dateText}>Tue, 07 June 2022</Text>
        <Text style={styles.todayText}>Today, 4 August 2022</Text>
      </View>

      {/* Search and Profile */}
      <View style={styles.searchProfileContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <View style={styles.profileIcons}>
          <TouchableOpacity style={styles.iconContainer}>
            <Text style={styles.icon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Text style={styles.icon}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Revenue</Text>
          <Text style={styles.statValue}>$187,918.76</Text>
          <Text style={styles.statChange}>+3% from last week</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Total views</Text>
          <Text style={styles.statValue}>123,006</Text>
          <Text style={styles.statChange}>+3% from last week</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Total Order</Text>
          <Text style={styles.statValue}>12,987</Text>
          <Text style={styles.statChange}>+3% from last week</Text>
        </View>
      </View>

      {/* Sales Figures Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Sales Figures</Text>
        <LineChart
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                data: [200, 450, 280, 800, 990, 430, 700],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2, // optional
              },
            ],
          }}
          width={Dimensions.get("window").width * 0.9} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#f8f9fb",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(67, 67, 67, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>

      {/* Sales History */}
      <View style={styles.salesHistoryContainer}>
        <Text style={styles.salesHistoryTitle}>Sales History</Text>
        <View style={styles.salesItem}>
          <Text style={styles.salesItemText}>Selena Bag</Text>
          <Text style={styles.salesItemPrice}>$100</Text>
        </View>
        <View style={styles.salesItem}>
          <Text style={styles.salesItemText}>Selena Bag</Text>
          <Text style={styles.salesItemPrice}>$100</Text>
        </View>
        <View style={styles.salesItem}>
          <Text style={styles.salesItemText}>Selena Bag</Text>
          <Text style={styles.salesItemPrice}>$100</Text>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fb',
  },
  header: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  dateText: {
    fontSize: 16,
    color: '#777',
  },
  todayText: {
    fontSize: 18,
    color: '#555',
    marginTop: 10,
  },
  searchProfileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  profileIcons: {
    flexDirection: 'row',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon: {
    fontSize: 18,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginRight: 10,
  },
  statTitle: {
    fontSize: 14,
    color: '#777',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  statChange: {
    fontSize: 12,
    color: '#4caf50',
    marginTop: 5,
  },
  chartContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  salesHistoryContainer: {
    marginBottom: 20,
  },
  salesHistoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  salesItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  salesItemText: {
    fontSize: 16,
    color: '#555',
  },
  salesItemPrice: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#8e44ad',
    borderRadius: 10,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom:30,
  },
});
