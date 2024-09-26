import { FlatList, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import List from "./list";
import Grid from "./grid";
import GridViewIcon from "../assets/GridViewIcon"
import ListViewIcon from "../assets/ListViewIcon"
import SearchIcon from "../assets/SearchIcon";
import MoneyContext from "../context/moneycontext";
function ListProduct({ navigation })
{
  const [display, setDisplay] = useState(false)
  const { money, setMoney } = useContext(MoneyContext)
  const [search, setSearch] = useState('')
  const { data, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      Axios.get("https://fakestoreapi.com/products").then((res) => res.data),
  });
  const filteredData = data?.filter(item => item.title.toLowerCase().includes(search.toLowerCase())) || [];
  if (isLoading || !data)
  {
    return <Text>Loading...</Text>;
  }
  function change()
  {
    setDisplay(!display)
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputcont}>
        <View style={styles.iconsearch}>
          <SearchIcon height={20} width={20} />
        </View>
        <TextInput placeholder="Search" onChangeText={text => setSearch(text)} />


      </View>
      <View style={styles.mycontainer}>
        <View style={styles.arrcont}>
          <Text onPress={() => navigation.navigate("My Products", { navigation: navigation })} style={styles.myproduct}>My Products </Text>
          <Image style={styles.arrow} source={require('../assets/arrowhead.jpg')} />
        </View>
        <View style={styles.coinstcont}>
          <Text style={styles.coins}>${money.toFixed(2)}</Text>
          <Text style={styles.mycoins}>My Balance</Text>
        </View>
      </View>
      <View style={styles.ListProduct}>
        <View style={styles.header}>
          <Text style={styles.text}>Available Products</Text>
          <TouchableOpacity onPress={change}>
            <View>{display ? <GridViewIcon height={25} width={25} /> : <ListViewIcon height={25} width={25} />}</View>
          </TouchableOpacity>
        </View>

        <FlatList

          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            display ? <Grid id={item.id} image={item.image} title={item.title} price={item.price} desc={item.description} navigation={navigation} />
              : <List id={item.id} image={item.image} title={item.title} price={item.price} desc={item.description} navigation={navigation} />


          )}
        />
      </View>
      <View style={styles.bottom}>
        <View></View>
        <TouchableOpacity onPress={() => navigation.navigate('Minigame')}>
          <View style={styles.imgcont}>
            <Image style={styles.image} source={require('../assets/egg-full.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ListProduct;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#9f68bf'
  },
  inputcont: {
    marginBottom: 15,
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsearch: {
    marginRight: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  mycontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  myproduct: {
    padding: 15,
  },
  arrow: {
    width: 20,
    height: 20,
  },
  arrcont: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  coinstcont: {
    backgroundColor: "white",
    padding: 10,
    shadowColor: 'gray',
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
    borderRadius: 10,
    position:"absolute",
    right:12,
    bottom:-30,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0.9,
      height: 0.4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 5.00,
    elevation: 6,
    zIndex:1,
  },
  coins: {
    marginLeft: 32,
    fontSize: 30,
    fontWeight: "bold",
    color: '#4c17ac'
  },
  mycoins: {
    marginLeft: 32,
  },
  header: {
    marginTop:40,
    flexDirection: "row",
    justifyContent: "space-between",
    color: 'black',
    alignItems: 'center'
  },
  ListProduct: {
    padding: 10,
    flex: 8,
    marginBottom:10,
    paddingHorizontal: 30,
    borderColor: 'black',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: 'white'
  },
  listview: {
    flexDirection: 'row',
    marginTop: 20,
    columnGap: 7,
    paddingHorizontal: 10,
    paddingVertical: 30,
    width: '100%',
    height: 100,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0.9,
      height: 0.4,
    },
    shadowOpacity: 0.34,
    backgroundColor: "white",
    shadowRadius: 5.00,
    elevation: 5,
  },
  listviewgrid: {
    flexDirection: "column",
    width: '50%',
    rowGap: 20,
    marginTop: 15,
    marginHorizontal: 5,
    overflow: "hidden",
    alignContent: 'center',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0.4,
      height: 0.8,
    },
    shadowOpacity: 0.34,
    backgroundColor: "white",
    shadowRadius: 9.00,
    elevation: 5,
  },
  product: {
    flexShrink: 1,
    fontWeight: 'bold',
    overflow: "hidden",
  },
  image: {
    width: 70,
    height: 70,
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: 'white',
    justifyContent: 'space-between',
    right: 10,
    bottom: 10 
  },
  imgcont: {
    marginRight: 30,
    marginTop: 5,
    height: 45,
    width: 45,
    alignItems: 'center',
    padding: 5,
    borderRadius: 45,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0.9,
      height: 0.4,
    },
    shadowOpacity: 0.34,
    backgroundColor: "white",
    shadowRadius: 5.00,
    elevation: 5,
  },
  image: {
    height: 30,
    width: 30,
  }
});
