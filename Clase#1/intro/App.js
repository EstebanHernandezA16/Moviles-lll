import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/components/shared/Navbar/Navbar.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={{color:'yellow'}}>Hello Native World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height: '95%',
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
