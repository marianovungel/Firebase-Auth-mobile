import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"#540375"}}>
        <StatusBar backgroundColor="#540375" />
        <View style={{flex: 1, justifyContent: "space-around", marginVertical: 10}}>
            <Text style={{color:"#fff", fontWeight: "bold", fontSize:35, textAlign: "center"}}>Adote o Seu Pet!</Text>
            <View style={{ flexDirection: "row", justifyContent: "center"}}>
                <Image style={{ width:350, height:350}} source={require("../../assets/dogs.png")} />
            </View>
            <View style={{marginVertical:20}}>
                <TouchableOpacity onPress={()=> navigation.navigate("Register")} style={{paddingVertical:15, backgroundColor:"#ffbf00", marginHorizontal: 40, borderRadius: 12}}>
                    <Text style={{fontSize: 20, fontWeight: "bold", textAlign: 'center', color: "#666"}}>Criar Conta</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row", justifyContent: "center", marginVertical:5}}>
                    <Text style={{color:"#fff", fontWeight:"semibold"}}>Já tem uma conta?</Text>
                    <TouchableOpacity  onPress={()=> navigation.navigate("Login")}>
                        <Text style={{fontWeight:"semibold", color:"#ffbf00", marginLeft:5}}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({})