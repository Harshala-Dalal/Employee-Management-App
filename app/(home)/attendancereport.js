import { StyleSheet, Text, View, ScrollView, } from 'react-native'
import React from 'react'
import { Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    text: {
      fontSize: 16,
      fontWeight: "600",
    },
  });

const attendancereport = () => {
  return (
    <ScrollView>
        <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
            <View style={{ padding: 30 }}>
            <View style={styles.container}>
                        <Octicons name="organization" size={24} color="black" />
                        <Text style={styles.text}>Organization Attendance Report</Text>
                        <Octicons name="organization" size={24} color="black" />
                    </View>
            </View>
        </LinearGradient>
        <LinearGradient colors={["#ffdab9", "#ffefd5"]} style={{ flex: 1 }}>
            <View style={{ padding: 25 }}>
            <View style={styles.container}>
                        <Ionicons name="md-star" size={24} color="black" />
                        <Text style={styles.text}>8:30 AM to 5:30 PM - Full Day</Text>
                        <Ionicons name="md-star" size={24} color="black" />
                    </View>
            </View>
        </LinearGradient>
        <LinearGradient colors={["#ffdab9", "#ffefd5"]} style={{ flex: 1 }}>
            <View style={{ padding: 25 }}>
            <View style={styles.container}>
                        <Ionicons name="md-star" size={24} color="black" />
                        <Text style={styles.text}>8:30 AM to 1:00 PM - Half Day</Text>
                        <Ionicons name="md-star" size={24} color="black" />
                    </View>
            </View>
        </LinearGradient>
        <LinearGradient colors={["#ffdab9", "#ffefd5"]} style={{ flex: 1 }}>
            <View style={{ padding: 25 }}>
            <View style={styles.container}>
                        <Ionicons name="md-star" size={24} color="black" />
                        <Text style={styles.text}>1:00 PM to 5:30 PM - Half Day</Text>
                        <Ionicons name="md-star" size={24} color="black" />
                    </View>
            </View>
        </LinearGradient>
        <LinearGradient colors={["#ffdab9", "#ffefd5"]} style={{ flex: 1 }}>
            <View style={{ padding: 25 }}>
            <View style={styles.container}>
                        <Ionicons name="md-star" size={24} color="black" />
                        <Text style={styles.text}>8:30 AM to 10:30 - Early Leave</Text>
                        <Ionicons name="md-star" size={24} color="black" />
                    </View>
            </View>
        </LinearGradient>
        <LinearGradient colors={["#ffdab9", "#ffefd5"]} style={{ flex: 1 }}>
            <View style={{ padding: 25 }}>
            <View style={styles.container}>
                        <Ionicons name="md-star" size={24} color="black" />
                        <Text style={styles.text}>4:00 PM to 5:30 PM - Early Leave</Text>
                        <Ionicons name="md-star" size={24} color="black" />
                    </View>
            </View>
        </LinearGradient>
        <LinearGradient colors={["#ffdab9", "#ffefd5"]} style={{ flex: 1 }}>
            <View style={{ padding: 25 }}>
            <View style={styles.container}>
                        <Ionicons name="md-star" size={24} color="black" />
                        <Text style={styles.text}>One Earn Leave after 30 days of working</Text>
                        <Ionicons name="md-star" size={24} color="black" />
                    </View>
            </View>
        </LinearGradient>
    </ScrollView>
  )
}

export default attendancereport

//const styles = StyleSheet.create({})

/*
import { StyleSheet, Text, View, ScrollView, } from 'react-native'
import React from 'react'
import { Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const attendancereport = () => {
  return (
    <ScrollView>
        <LinearGradient colors={["#ff7f50", "#fff8dc"]} style={{ flex: 1 }}>
            <View style={{ padding: 25 }}>
            <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",}}>
                        <Ionicons name="md-star" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>8:30 AM to 5:30 PM - Full Day</Text>
                        <Ionicons name="md-star" size={24} color="black" />
                    </View>
            </View>
        </LinearGradient>
        <LinearGradient colors={["#ff7f50", "#fff8dc"]} style={{ flex: 1 }}>
            <View style={{ padding: 25 }}>
            <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",}}>
                        <Ionicons name="md-star" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>8:30 AM to 1:00 PM - Half Day</Text>
                        <Ionicons name="md-star" size={24} color="black" />
                    </View>
            </View>
        </LinearGradient>
        <LinearGradient colors={["#ff7f50", "#fff8dc"]} style={{ flex: 1 }}>
            <View style={{ padding: 25 }}>
            <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",}}>
                        <Ionicons name="md-star" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>1:00 PM to 5:30 PM - Half Day</Text>
                        <Ionicons name="md-star" size={24} color="black" />
                    </View>
            </View>
        </LinearGradient>
        <LinearGradient colors={["#ff7f50", "#fff8dc"]} style={{ flex: 1 }}>
            <View style={{ padding: 25 }}>
            <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",}}>
                        <Ionicons name="md-star" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>8:30 AM to 10:30 - Early Leave</Text>
                        <Ionicons name="md-star" size={24} color="black" />
                    </View>
            </View>
        </LinearGradient>
        <LinearGradient colors={["#ff7f50", "#fff8dc"]} style={{ flex: 1 }}>
            <View style={{ padding: 25 }}>
            <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",}}>
                        <Ionicons name="md-star" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>4:00 PM to 5:30 PM - Early Leave</Text>
                        <Ionicons name="md-star" size={24} color="black" />
                    </View>
            </View>
        </LinearGradient>
        <LinearGradient colors={["#ff7f50", "#fff8dc"]} style={{ flex: 1 }}>
            <View style={{ padding: 25 }}>
            <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",}}>
                        <Ionicons name="md-star" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>One Earn Leave after 30 days of working</Text>
                        <Ionicons name="md-star" size={24} color="black" />
                    </View>
            </View>
        </LinearGradient>
    </ScrollView>
  )
}

export default attendancereport

const styles = StyleSheet.create({})
*/