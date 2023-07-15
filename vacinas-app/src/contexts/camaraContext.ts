import { createContext } from "react";

export const CamaraContext = createContext({camaraId:'', setCamaraId:(camaraId:string)=>{}});