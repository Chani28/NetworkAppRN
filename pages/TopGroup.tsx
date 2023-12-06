import { useEffect, useState } from "react";
import { View, Text} from "react-native";
import {  IGropus} from  "../state/Group";
import { IArea } from "../state/Area";
import { INetwroks } from "../state/Network";
import { IData } from "../state/DataArray";

import axios from 'axios';
import { useRealm } from "@realm/react";






export default function TopGroup() {

 

    const [data,setData]=useState<IData>();
    const [gropus,setGropus]=useState<Array<IGropus>>([]);
    const [areas,setAreas]=useState<Array<IArea>>([]);
    const [netwroks,setNetwroks]=useState<Array<INetwroks>>([]);
    const [name,setName]=useState("");
    const baseUrl = 'https://shared.gnp.police.gov.il:10082/api/tapnetworks/';
    const realm = useRealm();

    useEffect(()=>{
      axios.defaults.headers.common['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJmZTY5MmExYS1jYTdmLTQyYTYtYTIwZC02OTM4YzBmYmU3YzIiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZTExMTIxMGEtMjg1OC00NmM3LWJhYWEtNjczYTQxMTBmMzVhL3YyLjAiLCJpYXQiOjE3MDE4NjM5MTksIm5iZiI6MTcwMTg2MzkxOSwiZXhwIjoxNzAxODY5MjQxLCJhaW8iOiJBVFFBeS84VkFBQUFTRUgwcVdFNWRUQmJUSC90eFJ6VHUxWnZHYS94N251WXJndlRyUm9SN2xXY0pSTk5rNThrUWoxWEVTTExCam14IiwiYXpwIjoiZmU2OTJhMWEtY2E3Zi00MmE2LWEyMGQtNjkzOGMwZmJlN2MyIiwiYXpwYWNyIjoiMSIsIm5hbWUiOiLXoteY16jXlCDXkdeZ16jXoNeR15DXldedIiwib2lkIjoiNjY5ZDdhNWQtNjBhMC00ZjdiLThjNDAtMDA3NzYwMWQ0ZGY5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiTTYxNDUwMDQyQHBvbGljZS5nb3YuaWwiLCJyaCI6IjAuQVFzQUNpRVI0VmdveDBhNnFtYzZRUkR6V2hvcWFmNV95cVpDb2cxcE9NRDc1OElMQU5NLiIsInJvbGVzIjpbIkxvZ2luIl0sInNjcCI6IkFwcC5Mb2dpbiIsInN1YiI6ImJxeFlxbHhLcGxiSUZkQ0Rpb1N1anVLdHkwdlBTVjhlaTk4ckRjZFZ1bmMiLCJ0aWQiOiJlMTExMjEwYS0yODU4LTQ2YzctYmFhYS02NzNhNDExMGYzNWEiLCJ1dGkiOiJKX0NfTy1henUwNnBnb3Fuc201TUFBIiwidmVyIjoiMi4wIn0.lsBFprClY8kGkTlxo22qRfizKdfKTlL-RJ16RmO5GbiZGymcDYEJJQSDCFq_88_zJPJBgEYUlcDfb8nX5VSSdOj7RH_acs50MOd1-gxfIMtwLQ3-PV299pzQI0q3Kpd5mGZyV3LlYHzMv7d3Ggp51sA8V56rxQFnpepx4u-sjDTiV5XWgFxTD9br0CpS6lPgopS6R-53oa8W6J4e0phTso2TIQqny4eWWnPGCweChj6el7dIjeLkIZF3k4Hxf1Oy7nRFcbHGkDJZH9J3CuLcPBqo6gfXR99COwP8wuUMzrDsLktILhT0m5ppnUNhC-R42SbXWFIpf6T_i-2zVljxTQ`;
      axios.get(`${baseUrl}All`).then((response) => {
        
      console.log(response.data);
      let data= response.data;
      console.log(data);
      realm.write(() => {
       realm.create('IData',response.data)
  } );
      
  })
//  .then (data => {IData = data; setData(data);})
   },[])
    
   
   
    return (
      <View>
        <Text> </Text>
    
            <View>
              <Text></Text>
              <Text></Text>
            </View>
          
        

      </View>
    ); 
  }
  
