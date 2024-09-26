import { StyleSheet,View,Image,Text,TouchableOpacity } from "react-native";
function List({id,image,title,price,desc,navigation}){
  return(
    <View style={styles.listview}>
          <Image style={styles.image} source={{uri:image}}/>
          <TouchableOpacity onPress={()=>navigation.navigate("Product",{
            id:id,
            image:image,
            title:title,
            price:price,
            desc:desc,
            navigation:navigation,
          })}>
          <View>  
            <Text style={styles.product}>
            {title}
            </Text>
            <Text>$ {price}</Text>
            </View>
            </TouchableOpacity>
          </View>
  )
}
export default List;

const styles = StyleSheet.create({
  listview:{
    flexDirection:'row',
    marginTop: 20,
    columnGap:7,
    paddingHorizontal:10,
    paddingVertical:30,
    width:'100%',
    height:100,
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
    width:70,
    height:70,
  }
});
