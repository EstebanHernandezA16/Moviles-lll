import * as React from 'react';
import { Button } from 'react-native-paper';
import { View } from 'react-native';

export const Buttons = ({handleOperation}) =>{

   

    return(
        <View style={{display:'flex', flexDirection:'column'}}>
            <View style={{flexDirection:'row'}}>

            <Button icon="plus-thick" mode="contained" onPress={() => handleOperation('+')} style={{minWidth:'35vw',margin:'1%', backgroundColor:'royalblue'}}>
             Sumar
            </Button>

            <Button icon="minus-thick" mode="contained" onPress={() => handleOperation('-')} style={{minWidth:'35vw',margin:'1%', backgroundColor:'royalblue'}}>
             Restar
            </Button>

            </View>
            <View style={{flexDirection:'row'}}>

            <Button icon="multiplication" mode="contained" onPress={() => handleOperation('m')} style={{minWidth:'35vw',margin:'1%', backgroundColor:'royalblue'}}>
             Multiplicar
            </Button>

            <Button icon="division" mode="contained" onPress={() => handleOperation('d')} style={{minWidth:'35vw',margin:'1%', backgroundColor:'royalblue'}}>
             Dividir
            </Button>

            </View>
            <View style={{alignItems:'center'}}>

            <Button icon="nuke" mode="contained" onPress={() => handleOperation('c')} style={{width:'50%',margin:'1%', backgroundColor:'royalblue'}}>
             Limpiar
            </Button>

            </View>



        </View>
        
    );
}