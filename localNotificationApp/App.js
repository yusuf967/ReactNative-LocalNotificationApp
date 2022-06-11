import React from 'react';
import { View,Button } from 'react-native';
import PushNotification from "react-native-push-notification";

function App() {


  PushNotification.configure({
     
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
    },
    popInitialNotification: true,
    requestPermissions: true,
  });
  return (
    <View style={{flex:1,backgroundColor:'#fffbbb',alignItems:'center'}}>
      <Button style={{backgroundColor:'#aef847'}} title={'BİLDİRİM YOLLA'} onPress={getNotification}/>
    </View>
  );

   function getNotification(){
    PushNotification.localNotification({
      title: "BİLDİRİM", // (optional)
      message: "MERHABALAR", // (required)
    });
   }
  
}

export default App;