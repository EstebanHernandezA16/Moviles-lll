import { View,Text } from "react-native";
import { navbarStyles } from "./NavbarStyles.js";


export const Navbar = () =>{
return(
    <View style={navbarStyles.container}>

    <Text style={{fontSize:30}}>Navbar</Text>
    </View>
   

);
}