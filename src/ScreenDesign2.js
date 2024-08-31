import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart, ProgressChart } from 'react-native-chart-kit';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shopevol</Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search anything..." />
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.icon}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Total Revenue</Text>
          <Text style={styles.statValue}>$667,39</Text>
          <Text style={styles.statChange}>+20.5%</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Total Orders</Text>
          <Text style={styles.statValue}>30,568</Text>
          <Text style={styles.statChange}>+10.6%</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Total Visitors</Text>
          <Text style={styles.statValue}>45,780</Text>
          <Text style={styles.statChange}>-5.45%</Text>
        </View>
      </View>

      {/* Sales Analytics Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Sales Analytics</Text>
        <LineChart
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43, 77],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get("window").width * 0.9}
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: "#f8f9fb",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 2,
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

      {/* Customers & Store Visits */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBox}>
          <Text style={styles.progressTitle}>Customers</Text>
          <ProgressChart
            data={{
              labels: ["Current", "New", "Retargeted"],
              data: [0.24, 0.28, 0.82],
            }}
            width={Dimensions.get("window").width * 0.42}
            height={140}
            strokeWidth={16}
            radius={32}
            chartConfig={{
              backgroundColor: "#f8f9fb",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            }}
            hideLegend={false}
            style={{ marginLeft: -10 }}
          />
        </View>
        <View style={styles.progressBox}>
          <Text style={styles.progressTitle}>Store Visits</Text>
          <Text style={styles.storeVisitText}>Men: 56%</Text>
          <Text style={styles.storeVisitText}>Women: 84%</Text>
        </View>
      </View>

      {/* Top Categories */}
      <View style={styles.topCategoriesContainer}>
        <Text style={styles.topCategoriesTitle}>Top Categories</Text>
        <ProgressChart
          data={{
            labels: ["Long Pants", "T-Shirts", "Accessories", "Jackets"],
            data: [0.25, 0.4, 0.1, 0.25],
          }}
          width={Dimensions.get("window").width * 0.9}
          height={140}
          strokeWidth={16}
          radius={32}
          chartConfig={{
            backgroundColor: "#f8f9fb",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
          }}
          hideLegend={false}
          style={{
            alignItems: 'center', // Center the chart
          }}
        />
        <TouchableOpacity style={styles.viewDetailButton}>
          <Text style={styles.viewDetailButtonText}>View Detail</Text>
        </TouchableOpacity>
      </View>

      {/* Order Status */}
      <View style={styles.orderStatusContainer}>
        <Text style={styles.orderStatusTitle}>Order Status</Text>
        <View style={styles.orderItem}>
          <Text style={styles.orderItemText}>RD-1234567123</Text>
          <Text style={styles.orderItemText}>Red Longsleeve</Text>
          <Text style={styles.orderItemText}>$20.56</Text>
        </View>
        <View style={styles.orderItem}>
          <Text style={styles.orderItemText}>TS-1234567124</Text>
          <Text style={styles.orderItemText}>White T-Shirt</Text>
          <Text style={styles.orderItemText}>$20.56</Text>
        </View>
        <View style={styles.orderItem}>
          <Text style={styles.orderItemText}>BP-1234567125</Text>
          <Text style={styles.orderItemText}>Long Blue Pant</Text>
          <Text style={styles.orderItemText}>$20.56</Text>
        </View>
        {/* Daha fazla sipariş öğesi ekleyebilirsiniz */}
      </View>

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
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A60E0',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  profileIcon: {
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
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  progressBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
  },
  progressTitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  storeVisitText: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  topCategoriesContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  topCategoriesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  viewDetailButton: {
    backgroundColor: '#4A60E0',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  viewDetailButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  orderStatusContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  orderStatusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  orderItemText: {
    fontSize: 16,
    color: '#555',
  },
});
