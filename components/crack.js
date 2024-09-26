import { Image,View,Text,TouchableOpacity,StyleSheet } from "react-native";

function Crack(props){

  return(
    <View style={styles.conttelor}>
      {props.coin === 1 ? (
        <View style={styles.conttelor}>
          <Text style={{fontSize:25,fontWeight:'bold'}}>Congratulations!</Text>
          <Text style={{fontSize:25}}>You got a gold coin!</Text>
          <Image style={styles.image} source={require('../assets/gold-coin.png')}/>
          <Image source={require('../assets/egg-broken.png')} />
          <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>100 dollars have been added to your balance</Text>
        </View>
      ) : props.coin === 2 ? (
        <View style={styles.conttelor}>
          <Text style={{fontSize:25,fontWeight:'bold'}}>Congratulations!</Text>
          <Text style={{fontSize:25}}>You got a silver coin!</Text>
          <Image style={styles.image} source={require('../assets/silver-coin.png')}/>
          <Image source={require('../assets/egg-broken.png')} />
          <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>50 dollars have been added to your balance</Text>
        </View>
      ) : (
        <View style={styles.conttelor}>
          <Text style={{fontSize:25,fontWeight:'bold'}}>Congratulations!</Text>
          <Text style={{fontSize:25}}>You got a bronze coin!</Text>
          <Image style={styles.image} source={require('../assets/bronze-coin.png')}/>
          <Image source={require('../assets/egg-broken.png')} />
          <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>20 dollars have been added to your balance</Text>
          
        </View>
      )}
    </View>
  );
}

export default Crack;

const styles=StyleSheet.create({
  conttelor:{
    padding:23,
    alignItems:'center'
  },
  telor:{
    marginTop:40
  },
  image:{
    height:70,
    width:70,
  }
});
