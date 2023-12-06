import {Realm} from '@realm/react';
import { ObjectSchema } from 'realm';


 export class IArea extends Realm.Object<IArea> 
{
    id!:number;
    name?:string;
    top_group_id!:number;
    top_group_name?:string;

    static schema:ObjectSchema = {
      name:'IArea',
      properties:{
        id: 'number',
         name:'string', 
         top_group_id: 'number', 
         top_group_name: 'string'
       
             },
       primaryKey: 'id',
             };
}
