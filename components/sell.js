import { StyleSheet,View,Image,Text, Button,Alert,ScrollView,Modal,TouchableOpacity } from "react-native";
import ListContext from "../context/myproduct";
import React,{useContext,useState} from "react";
import MoneyContext from "../context/moneycontext";
function Sell({route}){
  const {title,image,price,desc,id,navigation} =route.params
  const {money,setMoney} =useContext(MoneyContext);
  const {list,setList} = useContext(ListContext);
  const [ada, setAda] = useState(false);
  function incmoney(set,id){
    const temp=money+set
    setMoney(temp)
    setList(list.filter((list)=>list.id!==id))
    Alert.alert( 
      "Product was sold succesfully!",
      `Your current balance is $${temp.toFixed(2)}`,
      [
        {text:"Ok",onPress:()=> navigation.navigate("EggStore")}
      ]
    );
  }
  return(
    <ScrollView>
    <View style={styles.container}>
    <Modal
    animationType="slide"
    transparent={true}
    visible={ada}
    onRequestClose={()=>
    setAda(!ada)}
    >
    <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image style={styles.modalImage} source={{uri:image}} />
              <Button title="Close" onPress={() => setAda(!ada)} />
            </View>
    </View>
      
    </Modal>
    <View style={styles.imgcontainer}>
    <TouchableOpacity onPress={()=> setAda(true)}>
        <Image style={styles.img} source={{uri:image}}/>
      </TouchableOpacity>
    </View>
      
      <View  style={styles.desccont}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <Text style={{fontSize:17,fontWeight:500,marginBottom:5}}>Price</Text>
          <Text>${price}</Text>
        </View>
        <View>
          <Text style={{fontSize:17,fontWeight:500,marginBottom:5}}>Description</Text>
          <Text>{desc}</Text>
        </View>
        <View style={styles.buy}>
          <Button onPress={()=>incmoney(price,id)}  color={'#9e58ad'} title="Sell" />
        </View>
      </View>
    </View>
    </ScrollView>
)
}
export default Sell;

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    
  },
  imgcontainer:{
    flex:1,
    marginTop:20,
    alignContent:'center',
    alignItems:'center'
  },
  img:{
    height:300,
    width:300,
  },
  desccont:{
    flex:1,
    margin:40,
    borderTopColor:'black',
    borderTopWidth:1,
    marginTop:20,
    paddingVertical:20,
    flexDirection:'column',
    rowGap:15,
    justifyContent:'space-between'
  },
  title:{
    fontSize:20,
    fontWeight:'bold'
  },
  buy:{   
    height:50,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: '100%'
  },
  modalView: {
    margin: 20,
    width: '100%',
    height: '100%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalImage: {
    marginTop:200,
    width: 350,
    height: 350,
    marginBottom:50
  },
})