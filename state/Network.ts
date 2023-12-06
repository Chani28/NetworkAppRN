import {Realm} from '@realm/react';
import { ObjectSchema } from 'realm';


export class INetwroks extends Realm.Object<INetwroks> {
    id!:number;
    code!:string;
    name?:string;
    top_group_name?:string;
    group_name?:string;
    area_name?:string;
    group_color?:string;
    group_text_color?:string;
    type_name?:string;
    area_id!:number;
    top_group_id!:number;
    //sort:number;

    static schema: ObjectSchema = {
        name: 'INetwroks',   
        properties:
        {    id: 'number',
        code:'string',
         name:'string', 
         top_group_name:'string',
         group_name:'string',
         area_name:'string',
         group_color:'string',
         group_text_color:'string',
         type_name:'string',
         area_id:'number',
         top_group_id:'number',
         sort:'number'
        },
         primaryKey: 'id',};
}