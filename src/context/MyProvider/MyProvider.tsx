import React, { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { MyReducer } from "./MyReducer";
import Info from "../../apis/Info.json";
import Info2 from "../../apis/Info2.json";
import {ApiExterna} from '../../apis/ApiExterna';


interface Props {
  children: JSX.Element | JSX.Element[];
}


const MyProvider = ({children}: Props)  => {

 const {apiInfo, llamadaApi} = ApiExterna();

  const [state, dispatch] = useReducer(MyReducer, { Info, Info2});

  // Chenge boolean info
  const changeTOGGLE = useCallback(
    (id: any) => {
      dispatch({
        type: "TOGGLE",
        payload: id,
      });
    },
    [Info2]
  );

  //* Delete one
  const deleteOne = useCallback(
    (id: any) => {
      dispatch({
        type: "DELETEONE",
        payload: id,
      });
    },
    [Info2]
  );


  let xid = state.Info2.length;
  const addUser = useCallback(
    (user: any) => {
        xid++;   
   dispatch({
       type: "ADD_USER",
       payload: { ...user, id: xid }
      });
    },
    [Info2]
  );

  return (
    
      <GlobalContext.Provider
        value={{
          addUser,
          state,
          llamadaApi,
          apiInfo,
          changeTOGGLE,
          deleteOne,
        }}>
        {children}
      </GlobalContext.Provider>
    
  );
} 

export default MyProvider;
