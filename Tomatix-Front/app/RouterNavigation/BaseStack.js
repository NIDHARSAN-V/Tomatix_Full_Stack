import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import TabNavigation from "./AppStacks/TabNavigation";
import AuthStack from "./AuthStack/AuthStack";
import axios from "axios";

const BaseStack = () => {

  const [isAuth, setIsAuth] = useState(false); 

  useEffect(()=>{
    const getAuth = async function()
    {
     try{
      axios.defaults.withCredentials = true;
      const res = await axios.get("http://192.168.231.72:5501/");
      if(res.data.success)
      {
        setIsAuth(true);
        console.log("Successsssssss")
      }
     }
     catch(error)
     {
      console.log(error)
      setIsAuth(false);
     }   
  }},[])

  return (
    <NavigationContainer>
      {isAuth ? (
        <TabNavigation />
      ) : (
        <AuthStack />
      )}
      <StatusBar hidden={true} />
    </NavigationContainer>
  );
};

export default BaseStack;
