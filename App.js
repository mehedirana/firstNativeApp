import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, ScrollView , Image} from 'react-native';



class App extends React.Component {
  
  state ={
    text: "loading"
  }

  render() {
   
    return (
      <View style={styles.container} >
      <ScrollView style ={{flex:1}}>
        <Image 
        source ={{uri:"https://images.pexels.com/photos/698170/pexels-photo-698170.jpeg?cs=srgb&dl=white-and-black-laptop-computer-on-brown-wooden-stool-near-698170.jpg&fm=jpg", height:200, width:200,}}/>
        <Image 
        source ={{uri:"https://images.pexels.com/photos/698170/pexels-photo-698170.jpeg?cs=srgb&dl=white-and-black-laptop-computer-on-brown-wooden-stool-near-698170.jpg&fm=jpg", height:200, width:200,}}/>
        <Image 
        source ={{uri:"https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", height:200, width:200,}}/>
        <Image 
        source ={{uri:"https://images.pexels.com/photos/3378993/pexels-photo-3378993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", height:200, width:200,}}/>
        <Image 
        source ={{uri:"https://www.pexels.com/photo/white-and-black-laptop-computer-on-brown-wooden-stool-near-pile-books-698170/", height:100, width:100,}}/>
        <Image 
        source ={{uri:"https://www.pexels.com/photo/white-and-black-laptop-computer-on-brown-wooden-stool-near-pile-books-698170/", height:100, width:100,}}/>
      </ScrollView>
      <Text>{this.state.text}</Text>
      <TextInput
        style={{fontSize:40, height:60,backgroundColor:"skyblue"}}
        placeholder="Type Here"
        onChangeText={(text)=> this.setState({text:text})}
      />
  
      <Text style={{fontSize:60}}>Welcome</Text>
      <Button onPress={()=>{Alert.alert("log in successfully")}} title="Click me" />
      </View>
    );
  }
}

  export default App;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
