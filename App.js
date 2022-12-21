import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { 
  Button,
  Platform,
  ToastAndroid,
  Alert
} from 'react-native';
import {launchSocureDocV} from '@socure-inc/docv-react-native';


export default function App() {

  const notifyMessage = msg => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      Alert.alert(msg);
    }
  };

  const successCallback = result => {
    notifyMessage(`Success: {docUUID = ${result.docUUID}}`);
    console.log(result);
  };

  const errorCallback = error => {
    notifyMessage(
      `Failure: {code: ${error.statusCode}, message: ${error.errorMessage}}`,
    );
    console.log(error);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Launch Socure DocV"
        onPress={() => {
          launchSocureDocV(
            '6c5f08ad-6d12-4a79-b272-0abb26d9a053',
            undefined,
            successCallback,
            errorCallback,
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  textStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
    marginBottom: 100,
  },
});

