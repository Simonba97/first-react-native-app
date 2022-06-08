import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello word! </Text>
      <Image
        source={{ uri: 'https://picsum.photos/200/200' }}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Simple Button pressed')}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    marginBottom: 10
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  button: {
    backgroundColor: 'red',
  }
});

export default App;