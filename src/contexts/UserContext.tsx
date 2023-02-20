import { createContext, useState } from "react";

export type IUser = {
  user?: {
    name: string,
    email: string,
    token?: string | null,
    refreshToken?: string | null,
  },
  storeUser: (user: IUser["user"]) => void;
}

export const UserContext = createContext({} as IUser);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser["user"]>();

  const storeUser = (user: IUser["user"]) => {
    console.log(user);
    setUser(user);
  }

  return (
    <UserContext.Provider value={{ user, storeUser }}>
      {children}
    </UserContext.Provider>
  )
};

export default UserContextProvider;