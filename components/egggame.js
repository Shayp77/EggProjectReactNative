import { Image,View,Text,TouchableOpacity,StyleSheet } from "react-native";
import MoneyContext from "../context/moneycontext";
import {useState,useContext } from "react";
import Crack from "./crack";
import NotCrack from "./notcrack";
function EggGame(){
  const {money,setMoney} =useContext(MoneyContext)
  const [crack,setCrack] = useState(false)
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 3) + 1);

  function change(){
    setCrack(!crack)
    if(randomNumber===1){
      setMoney(money+100)
    }else if(randomNumber===2){
      setMoney(money+50)
    }else if(randomNumber===3){
      setMoney(money+20)
    }
  }
 return(
  <View style={styles.cont}>
  <View style={styles.coincont}>
    <View style={styles.coins}>
      <Image style={styles.image} source={require('../assets/gold-coin.png')}/>
      <Text>100</Text> 
    </View>
    <View style={styles.coins}>
      <Image style={styles.image} source={require('../assets/silver-coin.png')}/>
      <Text>50</Text> 
    </View>
    <View style={styles.coins}>
      <Image style={styles.image} source={require('../assets/bronze-coin.png')}/>
      <Text>20</Text> 
    </View>
  </View>
  <View>
  {crack ?  <Crack coin={randomNumber}/>:<NotCrack change={change} />}
  </View>
  
  </View>
 )
}
export default EggGame;

const styles=StyleSheet.create({
  cont:{
    backgroundColor:'white',
    height:'100%',
    width:'100%',
    flexDirection:'column',
    rowGap:100,
    alignItems:'center'
  },  
  coincont:{
    flexDirection:'row',
    columnGap:23,
    marginHorizontal:20,
    marginTop:20,
  },
  coins:{
    flexDirection:'row',
    alignItems:"center",
  },  
  image:{
    height:40,
    width:40,
  },
  
})