import { StyleSheet,View,Text, Image,Button,FlatList,TouchableOpacity,ScrollView } from "react-native";
import React,{useContext} from "react";
import ListContext from "../context/myproduct";

function Viewproduct({navigation}){
  
  const {list,setList} = useContext(ListContext);
  return(
    <View style={styles.tes}>
      <FlatList 
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item})=>(
          <View style={styles.listview}>
          <TouchableOpacity style={styles.listview} onPress={()=>navigation.navigate('Sell Product',{
            id:item.id,
            image:item.image,
            title:item.title,
            price:item.price,
            desc:item.desc,
            navigation:navigation
          })}>
          <Image style={styles.image} source={{uri:item.image}}/>
          <View>  
            <Text style={styles.product}>
            {item.title}
            </Text>
            <Text>$ {item.price}</Text>
            </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}
export default Viewproduct;

const styles=StyleSheet.create({
  tes:{
    flex:1,
    width:'100%',
    height:'100%',
    padding:20
  },
  listview:{
    flexDirection:'row',
    columnGap:10,
    padding:5,
    marginBottom:10,
    columnGap:7,
    paddingVertical:10,
    width:'100%',
    height:80,
    shadowColor:'grey',
    shadowOffset:{
      width:0.6,
      height:0.4,
    },
    shadowOpacity:0.34,
    backgroundColor:"white",
    shadowRadius:5.00,
    elevation:5,
    alignItems:'center'
  },
  product:{
    flexShrink:1,
    fontWeight:'bold',
    overflow:"hidden",
  },
  image:{
    width:55,
    height:55,
    marginRight:20,
  }
})