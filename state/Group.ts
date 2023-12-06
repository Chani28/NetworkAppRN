import React from 'react';
import Realm, {ObjectSchema} from 'realm';
import {createRealmContext} from '@realm/react';


export class IGropus extends Realm.Object<IGropus> 
{
    id!:number;
    name?:string;
    color?:string;
    text_color?:string;
    HasAreas!:boolean;
    sort!:number;

    static schema:ObjectSchema = {
        name: 'IGroup',
        properties:{
            id:'number',
         name:'string', 
        color: 'string', 
        text_color: 'string',
        HasAreas: 'boolean' ,
        sort:'number' 
        },
         
        primaryKey: 'id',
             };
}

// Create a configuration object
const realmConfig: Realm.Configuration = {
    schema: [IGropus],
  };
  // Create a realm context
  const {RealmProvider, useRealm, useObject, useQuery} =
    createRealmContext(realmConfig);
  // Expose a realm
  /*
  function AppWrapper() {
    return (
      <RealmProvider>
        <RestOfApp />
      </RealmProvider>
    );
  }
  */
