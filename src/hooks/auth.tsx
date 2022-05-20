import { createContext, useContext, useState, ReactNode } from "react";

import { UserDTO } from '../dtos/UserDTO';

type AuthContextData = {
  user: UserDTO;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  return(
    <AuthContext.Provider value={{
      user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function UseAuth(){
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  UseAuth,
}