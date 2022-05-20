import * as react from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';

const DATA =[
  {
    id : 1,
    title: "ODC LUNCHING",
    description: "lorem ipsum dolor sit lorem ipsum sit amet.",
  },

  {
    id : 2,
    title: "No corruption",
    description: "lorem ipsum dolor sit lorem ipsum sit amet.",
  },

  {
    id : 3, 
    title: "Orange new course",
    description: "lorem ipsum dolor sit lorem ipsum sit amet.",
  },

  {
    id : 4,
    title: "Orange venture capital",
    description: "lorem ipsum dolor sit lorem ipsum sit amet.",
  },

  {
    id : 5,
    title: "ODC Wordpress course",
    description: "lorem ipsum dolor sit lorem ipsum sit amet.",
  },

  {
    id : 6,
    title: "Top to have point",
    description: "lorem ipsum dolor sit lorem ipsum sit amet.",
  },

  {
    id : 7,
    title: "eMPLOYEES aCTIONS TO WORK",
    description: "lorem ipsum dolor sit lorem ipsum sit amet.",
  },
  {
    id : 8,
    title: "Life at orange HQ",
    description: "lorem ipsum dolor sit lorem ipsum sit amet.",
  },
  {
    id : 9,
    title: "New Employment Status",
    description: "lorem ipsum dolor sit lorem ipsum sit amet.",
  },
  {
    id : 10,
    title: "Orange new CEO",
    description: "lorem ipsum dolor sit lorem ipsum sit amet.",
  }
];

const Item = ({title, description}) =>(
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>description</Text>
  </View>
);

export default function DetailScreen({navigation}) {
  const renderItem= ({item})=>(
    <Item title={item.title} description={item.description}/>
  );
  
  return(    
    
    <SafeAreaView style = {styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item=> item.id}
      />
    </SafeAreaView>
 );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:#'fff'
    marginTop:10,
  },
  item:{
    backgroundColor:'#FFAD60',
    padding:10,
    marginVertical:8,
    marginHorizontal:16,
    borderRadius:15,

  },
  title:{
    fontsize:20,
    fontWeight:'bold',
  },

  description:{
    fontSize:16,
  }

})