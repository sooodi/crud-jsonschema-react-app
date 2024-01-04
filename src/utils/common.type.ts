import { Key } from "react";

export type productObj = {
  id: Key;
  name: string;
  images: string;
  price: number;     
    
};

export interface User {
  id: number;
  username: string;
  email: string;
  authToken?: string;
  password: string;
}
export type ObjImag = {
  [id: number]: string;
};

export type filterObjType = {
  Name: string;
  //Type: string;
  //you can add as many items tht you want to filter with 
};
