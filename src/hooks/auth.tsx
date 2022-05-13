import { createContext, useContext, useState } from "react";

type User = {
  id: string;
  username: string
}

type AuthContextData = {

}

export const AuthContext = createContext({});