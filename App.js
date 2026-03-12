import { Alert, Button, StyleSheet, View } from 'react-native';

export default function App() {

  const handlePress = () => {
    Alert.alert("hello");
  };

  return (
    <View style={styles.container}>
      <Button
        title="Press me"
        onPress={handlePress}
      />
    </View>
  );
}   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});