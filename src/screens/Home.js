import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'

const Home = () => {

  const handleLogout = async()=>{
    await signOut(auth)
  }
  return (
    <SafeAreaView style={{flex:1, justifyContent: "center", alignItems:"center"}}>
      <Text>Home</Text>
      <TouchableOpacity onPress={handleLogout} style={{paddingHorizontal:20, paddingVertical:10, backgroundColor:"red", borderRadius: 20, marginVertical: 15}}>
        <Text style={{color:"#fff", fontWeight:"bold"}}>Log out</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})