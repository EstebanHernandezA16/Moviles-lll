
import { useState } from 'react';
import { Pressable, Image, StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/shared/Navbar/Navbar';
import { Footer } from './src/shared/Footer/Footer';
import { Operation } from './src/operation/Operation';


export default function App() {
  const [imagen, setImagen]= useState(1);

const handleImagen = () =>{
  
  if(imagen==1){
    setImagen(2)
  }else if(imagen==2){
    setImagen(1)
  }
  
 
}
  return (
    <View
      style={[styles.container,{flexDirection: 'column'}]}>
      <View style={{flex: 1, backgroundColor:'gray', textAlign:'center'}} ><Navbar /></View>
      <View style={{flex: 2}}>
        <Text style={{textAlign:'center',justifyContent:'center', marginTop:50}}>Calculator</Text>
        {imagen==1? 
        (<Image style={{justifyContent:'center',alignItems:'center',width:'50%',height:'60%', marginLeft:110}} source={require('./assets/calc.png')} />
        ) :(<Image style={{justifyContent:'center',alignItems:'center',width:'50%',height:'80%', marginLeft:110}} source={require('./assets/calc2.png')} />
        )}
        <Pressable title='Cambiar imagen' style={styles.button} onPress={()=> handleImagen()} >
          <Text style={styles.text}>Change image</Text>
        </Pressable>
          <Operation/>


        </View>
      <View style={{flex: 3}} ><Footer/></View>
    </View>
  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'cyan',
      textAlign:'center',
      justifyContent:'center',

    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      marginHorizontal:120,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
      marginLeft:120,

    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });

