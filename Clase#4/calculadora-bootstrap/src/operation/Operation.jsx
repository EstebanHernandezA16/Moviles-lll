import { View,Text, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { useState, useEffect } from "react";
import { Buttons } from "../Buttons/Buttons";

export const Operation = () =>{
const [numberOne, setNumberOne] = useState(0)
const [numberTwo, setNumberTwo] = useState(0)
const [result, setResult] = useState('')

const handleOperation = (op) =>{


    switch (op) {
        case '+':
            setResult(parseFloat(numberOne)+parseFloat(numberTwo))
            break;
        case '-':
            setResult(parseFloat(numberOne)-parseFloat(numberTwo))
            break;
        case 'm':
            setResult(parseFloat(numberOne) * parseFloat(numberTwo))
            break;    
        case 'd':
            setResult((parseFloat(numberOne)/parseFloat(numberTwo)).toFixed(2))
            break; 

        case 'c':
            // alert('limpiando')
            console.log('limpiando');
            setNumberOne(0)
            setNumberTwo(0) 
            setResult(0)
            break;     
    
        default:
            alert('Operacion no encontrada')
            setNumberOne(0)
            setNumberTwo(0) 
            setResult(0)
            break;
    }
        
}


    return(
        <>
        <TextInput
        label="Number One"
        value={numberOne==0? '' : numberOne}
        onChangeText={numberOne => setNumberOne(numberOne)}
        style={{justifyContent:'center', marginHorizontal:'auto',marginVertical:'5%', padding: '2px'}}
        left={<TextInput.Icon icon='numeric'/>}
        />

        <TextInput
        label="Number Two"
        value={numberTwo==0? '' : numberTwo}
        onChangeText={numberTwo => setNumberTwo(numberTwo)}
        style={{justifyContent:'center', marginHorizontal:'auto',marginVertical:'5%', padding: '2px'}}
        left={<TextInput.Icon icon="ticket-confirmation-outline" />}
        />

        <Buttons handleOperation={handleOperation} />
           
        

        
        
        {result!=null && (<Text>The result is: {result}</Text>)}
        </>
    );
}