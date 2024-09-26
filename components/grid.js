import { StyleSheet,View,Image,Text,TouchableOpacity } from "react-native";
function Grid({id,image,title,price,desc,navigation}){
  return (
  <View style={styles.listviewgrid}>
          
          
          <TouchableOpacity  onPress={()=>navigation.navigate("Product",{
            id:id,
            image:image,
            title:title,
            price:price,
            desc:desc,
            navigation:navigation
          })}>
         
          <View>  
          <Image style={styles.image} source={{uri:image}}/>
            <Text style={styles.product}>
            {title}
            </Text>
            <Text>$ {price}</Text>
            </View>
            </TouchableOpacity>
          </View>
)
}
export default Grid;

const styles = StyleSheet.create({
  listviewgrid:{
    flexDirection:"column",
    width:'50%',
    rowGap:20,
    marginTop:15,
    marginHorizontal:5,
    overflow:"hidden",
    alignContent:'center',
    shadowColor:'grey',
    shadowOffset:{
      width:0.4,
      height:0.8,
    },
    shadowOpacity:0.34,
    backgroundColor:"white",
    shadowRadius:9.00,
    elevation:5,
    
  },
  product:{
    flexShrink:1,
    fontWeight:'bold',
    overflow:"hidden",
  },
  image:{
    width:70,
    height:70,
  },

});