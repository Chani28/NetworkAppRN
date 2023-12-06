
import { IGropus } from "./Group";
import { IArea } from "./Area";
import { INetwroks } from "./Network";
import {Realm} from '@realm/react';
import { ObjectSchema } from "realm";




export class IData  extends Realm.Object<IData> {

    _id!: Realm.BSON.ObjectId;
  //  groups:Array<IGropus>;
  //  areas:Array<IArea>;
  //  networks:Array<INetwroks>;


   static schema: ObjectSchema ={
    name:'IData',
    properties:{
        gropus: 'Array<IGropus>',
        areas:'Array<IArea>',
        networks: 'Array<INetwroks> '
    },
        primaryKey: 'id',
                };
             }
