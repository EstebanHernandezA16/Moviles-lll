import { View,Text } from "react-native";
import { styles } from "./NavbarStyles";


export const Navbar = () =>{
return(
    <View style={styles.container}>
    <Text style={styles.text}>Navbar</Text>
    </View>
);
}