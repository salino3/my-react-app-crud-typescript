import { createContext } from "react";

export interface PropsTheGlobal {
  state2: any;
  apiInfo: any;
  llamadaApi: () => void;
  addUser2:(user: any) => void;
  deleteOne2:(id: any) => void;
}

export const TheGlobalContext = createContext<PropsTheGlobal>({} as PropsTheGlobal);  