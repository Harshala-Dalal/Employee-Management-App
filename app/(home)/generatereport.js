import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { Octicons, FontAwesome } from '@expo/vector-icons';

const generatereport = () => {
  return (
    <ScrollView>
        <LinearGradient colors={["#da70d6", "#dda0dd"]} style={{ flex: 1 }}>
            <View style={{ padding: 30 }}>
            <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",}}>
                        <Octicons name="organization" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>Organization Leave Report</Text>
                        <Octicons name="organization" size={24} color="black" />
                    </View>
            </View>
        </LinearGradient>
        <LinearGradient colors={["#ffdab9", "#ffefd5"]} style={{ flex: 1 }}>
            <View style={{ padding: 25 }}>
            <View style={{
                        flexDirection: "row",
                        alignItems: "center",}}>
                        <FontAwesome name="arrow-circle-right" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}> One Earned leave (EL) after 30 days working</Text>    
                    </View>
            </View>
        </LinearGradient>
        <LinearGradient colors={["#ffdab9", "#ffefd5"]} style={{ flex: 1 }}>
            <View style={{ padding: 25 }}>
            <View style={{
                        flexDirection: "row",
                        alignItems: "center",}}>
                        <FontAwesome name="arrow-circle-right" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}> Sick leave (SL) - 6 days/year</Text>    
                    </View>
            </View>
        </LinearGradient>
        <LinearGradient colors={["#ffdab9", "#ffefd5"]} style={{ flex: 1 }}>
            <View style={{ padding: 25 }}>
            <View style={{
                        flexDirection: "row",
                        alignItems: "center",}}>
                        <FontAwesome name="arrow-circle-right" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}> Casual leave (CL) - 6 days/year</Text>    
                    </View>
            </View>
        </LinearGradient>
        <LinearGradient colors={["#ffdab9", "#ffefd5"]} style={{ flex: 1 }}>
            <View style={{ padding: 25 }}>
            <View style={{
                        flexDirection: "row",
                        alignItems: "center",}}>
                        <FontAwesome name="arrow-circle-right" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}> Leave without pay (LWP) - 10 days/year</Text>    
                    </View>
            </View>
        </LinearGradient>
        <LinearGradient colors={["#ffdab9", "#ffefd5"]} style={{ flex: 1 }}>
            <View style={{ padding: 25 }}>
            <View style={{
                        flexDirection: "row",
                        alignItems: "center",}}>
                        <FontAwesome name="arrow-circle-right" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}> Maternity leave (ML) for ladies of 45 days</Text>    
                    </View>
            </View>
        </LinearGradient>
    </ScrollView>
  )
}

export default generatereport

const styles = StyleSheet.create({})