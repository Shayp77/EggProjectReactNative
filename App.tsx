import React, {useEffect, useState} from 'react';
import {LogBox, BackHandler, Alert} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Buy from './components/buy';
import Sell from './components/sell';
import Viewproduct from './components/listproduct';
import ListProduct from './components/goallist';
import MoneyContext from './context/moneycontext';
import ListContext from './context/myproduct';
import EggGame from './components/egggame';
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
  },
});
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Stack = createNativeStackNavigator();
export default function App() {
  const [money, setMoney] = useState(500);
  const [list, setList] = useState([]);
  useEffect(()=>{
    const backAction =()=>{
      Alert.alert("You are about to leave the app","Are you sure about it?",[
        {
          text:"Cancel",
          onPress: () => null,
          style:"cancel"
        },
        {text:"Yes",onPress:()=>BackHandler.exitApp()}
      ]);
      return true;
    };
    const backHandler=BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);
  return (
    <ListContext.Provider value={{list, setList}}>
      <MoneyContext.Provider value={{money, setMoney}}>
        <QueryClientProvider client={client}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="EggStore" component={ListProduct} />
              <Stack.Screen name="Product" component={Buy} />
              <Stack.Screen name="My Products" component={Viewproduct} />
              <Stack.Screen name="Sell Product" component={Sell} />
              <Stack.Screen name="Minigame" component={EggGame} />
            </Stack.Navigator>
          </NavigationContainer>
        </QueryClientProvider>
      </MoneyContext.Provider>
    </ListContext.Provider>
  );
}
