import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/shared/Navbar/Navbar';
import { Footer } from './src/shared/Footer/Footer';
export default function App() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <Text>calculadora</Text>
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    fontWeight:'bold',
    
  },
});
