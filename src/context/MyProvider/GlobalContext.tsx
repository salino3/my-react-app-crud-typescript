import { createContext } from "react";


export interface PropsMyGlobal {
  state: any;
  apiInfo: any;
  llamadaApi: () => void;
  changeTOGGLE: (id: any) => void;
  deleteOne: (id: any) => void;
  addUser: (user: any) => void;
}

export const GlobalContext = createContext<PropsMyGlobal>({} as PropsMyGlobal);