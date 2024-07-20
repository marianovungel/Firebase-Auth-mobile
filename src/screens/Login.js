import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';


const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async ()=>{
      if(email && password){
        try {
          await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
          console.log("got Error:", error.message)
        }
      }

    }
  return (
    <View style={{flex:1, color:"#fff", backgroundColor:"#540375"}}>
      <StatusBar backgroundColor="#540375" />
      <SafeAreaView style={{marginTop:20}}>
        <View style={{ flexDirection: "row", justifyContent:"flex-start"}}>
            <TouchableOpacity onPress={()=> navigation.goBack()} 
                style={{backgroundColor:"#ffbf00", padding: 12, borderTopEndRadius:20, borderBottomLeftRadius:20, marginLeft: 20}}>
                <AntDesign name="arrowleft" size={20} color="black" />
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", justifyContent:"center"}}>
            <Image source={require("../../assets/new.png")} style={{width:220, height:220}} />
        </View>
      </SafeAreaView>
      <View style={{flex: 1, backgroundColor: "white", paddingHorizontal:20, paddingTop:20, borderTopLeftRadius: 50, borderTopRightRadius:50}}>
        <View style={{marginVertical: 10}}>
          <Text style={{color:"#666", marginLeft:10}}>Seu Email</Text>
          <TextInput 
            onChangeText={value=>setEmail(value)}
            value={email}
            placeholder='Enter Email'
          style={{padding: 10, backgroundColor: "#f5f5f5", borderRadius: 20, color:"#666", marginTop:10, marginBottom:20}} />
          <Text style={{color:"#666", marginLeft:10}}>Sua Senha</Text>
          <TextInput 
            onChangeText={value=>setPassword(value)}
            value={password}
            placeholder='Enter Password'
            secureTextEntry
          style={{padding: 10, backgroundColor: "#f5f5f5", borderRadius: 20, color:"#666", marginTop:10}} />
          <TouchableOpacity style={{flexDirection:"row", justifyContent:"flex-end", marginVertical:10}}>
            <Text style={{color:"#666"}}>Esquiceu a Senha ?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit} style={{ paddingVertical:12, backgroundColor:"#ffbf00", borderRadius:15 }}>
            <Text style={{color:"#666", fontSize: 18, textAlign: 'center', fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 18, color:"#666", fontWeight:"bold", textAlign: "center", paddingVertical: 15}}>
          Or
        </Text>
        <View style={{flexDirection:"row", justifyContent:"center", gap:20}}>
          <TouchableOpacity style={{padding: 7, borderRadius: 50}}>
            <FontAwesome name="google-plus-circle" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 7, borderRadius: 50}}>
            <FontAwesome name="apple" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 7, borderRadius: 50}}>
            <FontAwesome5 name="facebook" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", justifyContent: "center", marginVertical:15}}>
          <Text style={{color:"#666", fontWeight:"semibold"}}>Não tem uma conta?</Text>
          <TouchableOpacity  onPress={()=> navigation.navigate("Register")}>
              <Text style={{fontWeight:"semibold", color:"#ffbf00", marginLeft:5}}>Cadastra-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})