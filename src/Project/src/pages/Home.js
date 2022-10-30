import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {TextInput, Button, List, FAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';//hook
import Input from '../components/Input';
import Container from '../components/Container';
import Body from '../components/Body';

const LISTA = [
  {
    id: 1,
    produto: 'Arroz',
    preco:"9.50",
  },
  {
    id: 2,
    produto: 'Feijão',
    preco:"10.70",
  },
    {
    id: 3,
    produto: 'Leite',
    preco:"4.30",
  },
    {
    id: 4,
    produto: 'Café',
    preco:"13.90",
  },
];
const HomePage = () => {
//navegação
  const navigation = useNavigation();
 
//recebe os dados, faz a renderização
  const renderItem = ({ item }) => (
    <List.Item
    title={item.produto}
    description={"R$ " + item.preco}
    style={styles.myList}
    />
  );
  return (
    <Container>        
     <Body>
      <View>
        <Input
          style={styles.textHeader}
          placeholder=" Adicionar localização"
          left={<TextInput.Icon name="map-marker"/>}
          //onchange
        />    
      </View>
      <View>
      <Text style={styles.textList}> Minhas Listas </Text>
      </View>
     
      <View style={styles.background}>
      <Text style={styles.title}>Lista 01</Text>
     
      <FlatList      
        data={LISTA}
        renderItem={renderItem}
        //usar o ids para as chaves de reação
        keyExtractor={item => item.id}
      />      
      </View >
      <View style={styles.view}>        
        <Text style={styles.newList}>Criar Lista </Text>
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => navigation.navigate('Lista')}
        />    
      </View>
      </Body>    
    </Container>
  )
}
const styles = StyleSheet.create({
  view:{
    flex: 1,
    flexDirection: 'row',
  },
  textHeader:{
    width: "80%",
    height: "10%",
    alignSelf: "center",
    backgroundColor: "#FFF",
    fontFamily:"Arial",
    fontSize: 18,
    fontWeight:200,
  },  
  textList:{
    position: "absolute",
    fontFamily:'Arial',
    fontSize: 19,
    color: "#000000",
    fontWeight: "700",
    fontStyle:'normal',
    margin: 32,  
  },
  newList:{
    position: 'absolute',
    fontFamily:'Arial',
    color: "#000000",
    fontWeight: "700",
    fontStyle:'normal',
    fontSize: 19,
    right: 200,
    bottom: 40,
  },
  background:{
    position: "absolute",
    width:"80%",
    height:"70%",
    top:"130px",
    left:"34px",
    backgroundColor: "#ECF0F1",
    borderRadius:20  },
  fab: {
    position: 'absolute',
    margin: 25,
    right: 5,
    bottom: 0,
    backgroundColor: "#E74C3C",  
  },
  title:{
    position: "absolute",
    width:"89px",
    height:"20px",
    top:"15px",
    left:"140px",
    fontFamily:'Arial',
    fontSize: "14px",
    color: "#000000",
    fontWeight: "800",
    lineHeight: "20px",
    letterSpacing: "-0.3px",
    fontStyle:"normal",
  },
  myList:{
    top:30,
    left:30,
  },
});
export default HomePage;