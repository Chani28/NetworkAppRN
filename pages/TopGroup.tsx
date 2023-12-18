import { useEffect, useState } from "react";
import { View, Text,FlatList,StyleSheet, Image,ScrollView,TextInput} from "react-native";
import {  IGropus} from  "../state/Group";
import { IArea } from "../state/Area";
import { INetwroks } from "../state/Network";
import { IData } from "../state/DataArray";

import axios from 'axios';
//import { useRealm } from "@realm/react";







export default function TopGroup() {

 

    const [data,setData]=useState<IData>();
    const [gropus,setGropus]=useState<Array<IGropus>>([]);
    const [areas,setAreas]=useState<Array<IArea>>([]);
    const [netwroks,setNetwroks]=useState<Array<INetwroks>>([]);
    const [name,setName]=useState("");
    const [search,setSearch]= useState("");
    const [myColor,setMyColor]=useState("gg");

    const baseUrl = 'https://shared.gnp.police.gov.il:10082/api/tapnetworks/';
    //const realm = useRealm();

    useEffect(()=> {
      axios.defaults.headers.common['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJmNGEwMWNhNS0yOTI0LTQwOGQtODM4My05NDdhNjI1ZjNjZWEiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vODgwOTVjMTEtZjJkOC00YTIzLWI1NTktODQ5M2VmMTM5MmFiL3YyLjAiLCJpYXQiOjE3MDI4OTA4OTIsIm5iZiI6MTcwMjg5MDg5MiwiZXhwIjoxNzAyODk2MjMwLCJhaW8iOiJBVFFBeS84VkFBQUFSTks4Mkk2OGpNWTBRN2lzVDBjd0VHQWxvcUwxaDAwbnk4eXVZMXlTcE83WDkvcmxrU29RV2VMRU1xK1RoME9vIiwiYXpwIjoiZjRhMDFjYTUtMjkyNC00MDhkLTgzODMtOTQ3YTYyNWYzY2VhIiwiYXpwYWNyIjoiMSIsIm5hbWUiOiLXntep15Qg15fXmdeZ15giLCJvaWQiOiJmZjBlNmY4Mi00Mzc3LTQyODEtYmFhYi0yZDU5ZjlhZDkwZGUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJNOTQ4NDQ0NTNAaWxwb2xpY2V0ZXN0Lm9ubWljcm9zb2Z0LmNvbSIsInJoIjoiMC5BWG9BRVZ3SmlOanlJMHExV1lTVDd4T1NxNlVjb1BRa0tZMUFnNE9VZW1KZlBPcDZBTkEuIiwicm9sZXMiOlsibG9naW4iXSwic2NwIjoiQXBwLkxvZ2luIiwic3ViIjoiNUQyMXY0bVFBLUhGT21Ta2F6ZW9neXpLUGhUbnRpcjE2X2l5dFhMQUFPOCIsInRpZCI6Ijg4MDk1YzExLWYyZDgtNGEyMy1iNTU5LTg0OTNlZjEzOTJhYiIsInV0aSI6IlZsM196V190bkVxQUcyQmJ3NDlDQUEiLCJ2ZXIiOiIyLjAifQ.hfdeirWM5cmF55LXEAeDoi9CXttHbOpmRV6V9FJPiICnQ57DdVUBPBvdouiX-C7Rgxs_PXJughh5hHQ7Y2wyWaEel1kqnl0fiGy8tOS7eFtQU9b6-VOpmrJweakLtDaYiqh8OQNFYhEdXRGkPlHtBUlmtvH8k77oTPdEPTTSPEruawiY19ZSuG4Nz5ONeZS-ZnZbwcnp63Zkw6uNK_aSwD9m83fSzPxPZQutRD4t0m4bAaHGeE_aU0wDUtHRnrK__tp6yNXK5UgupIqpxWzxKbyWj-b7xCUihDX9swhxxjrETzecssIZDgvpu_gMd2lhCYlTEHpYhKb4iiqcXRYOpg`;
      axios.get(`${baseUrl}All`).then((res) => {
        
      console.log(res.data.Response);
      setGropus(res.data.Response?.TopGroup);
      
     // realm.write(() => {
     // realm.create('IData',response.data)
  } )
      
  },[])
//  .then (data => {IData = data; setData(data);})
  // },[])
  



  const renderProduct = (item:IGropus) => (
    
    

      <View style={styles.container}> 
       <Text style ={styles.product} >{item.name}</Text> 
       <Image
         source={require('../Images/grey.png')} 
         style={styles.grey}  /> 
           <View
      style={[styles.viewcolor,{
      backgroundColor: '#' + item.color}]}/>
         <View
      style={{height: 1, width: "100%",
        backgroundColor:'#E4E3EA'}}></View> 
       </View> 

  );

  
  /*
  const handleSearch =(search) => {
    setSearch(search);
    setGropus(
      gropus.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) 
    )
    
      );
  
  };
   */
    return (
      

        <FlatList

data={gropus}
renderItem={({item})=>renderProduct(item)}
keyExtractor={(item) => item.id.toString()}/>
            
          );

        }

        const styles = StyleSheet.create({
          container: {
            width:"100%",
            height:52,
            flex:1,
          },
          
          image:{
            flex:1,
            padding:8,
          },
          viewcolor:
          {
           backgroundColor: 'green',
           width:5,
           height:50,
           

          },
          product:{
           fontSize:23,
            marginLeft:20,
           
           marginBottom:22  
                      },
          grey:{
            marginBottom:20,
            marginLeft:280,
            padding:1,

          },
          input:{flex: 1,
            borderRadius: 25,
        borderColor: '#333',
        backgroundColor: '#fff',},
        });
