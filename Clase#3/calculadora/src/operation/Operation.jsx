import { View,TextInput,Text, Pressable } from "react-native";
import { useState, useEffect } from "react";

export const Operation = () =>{
const [numberOne, setNumberOne] = useState(0)
const [numberTwo, setNumberTwo] = useState(0)
const [result, setResult] = useState(null)

useEffect(()=>{
    setResult(numberOne+numberTwo)
},[numberOne!=null && numberTwo!= null])  

    return(
        <>
        <TextInput  placeholder="Ingrese valor 1"  onChange={(value1) =>setNumberOne(value1)} value={numberOne} style={{marginLeft:160}}/>
        <TextInput  placeholder="Ingrese valor 2" onChange={(value2) =>setNumberTwo(value2)} value={numberTwo} style={{marginLeft:160}}/>
        
        {result!=null && (<Text>The result is: {result}</Text>)}
        </>
    );
}