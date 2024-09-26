import { Image,View,Text,TouchableOpacity,StyleSheet } from "react-native";
import MoneyContext from "../context/moneycontext";
import { useContext,useState } from "react";

function NotCrack(props){

return(
  <View style={styles.conttelor}>

    <Text style={{fontSize:20,}}>Click on the egg to get your prize!</Text>
    <TouchableOpacity onPress={props.change}>
    <Image style={styles.telor} source={require('../assets/egg-full.png')}/>
    </TouchableOpacity>
    
  </View>
)
}
export default NotCrack
const styles=StyleSheet.create({
  conttelor:{
    padding:23,
    alignItems:'center'
  },
  telor:{
    marginTop:40
  }
})