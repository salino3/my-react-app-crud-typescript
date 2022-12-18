import React, { useCallback, useReducer } from 'react';
import { TheGlobalContext } from '../TheProvider/TheGlobalContext';
import Info from "../../apis/Info.json";
import Info2 from "../../apis/Info2.json";
import {ApiExterna} from '../../apis/ApiExterna';
import {TheReducer} from './TheReducer';


interface Props {
  children: JSX.Element | JSX.Element[];
};


const TheProvider = ({children}: Props) => {
  const { apiInfo, llamadaApi } = ApiExterna();

  const [state2, dispatch2] = useReducer(TheReducer, { Info, Info2 });


  //* Delete one
  const deleteOne2 = useCallback(
    (id: any) => {
      dispatch2({
        type: "DELETEONE",
        payload: id,
      });
    },
    [Info]
  );

  let y = state2.Info.length + 1; 
  const addUser2 = useCallback(
    (user: any) => {
      dispatch2({
        type: "ADD_USER",
        payload: { ...user, id: y++} 
      });
    },
    [Info]
  );

  return (
    <TheGlobalContext.Provider
      value={{
        state2,
        apiInfo,
        llamadaApi,
        addUser2,
        deleteOne2,
      }}
    >
      {children}
    </TheGlobalContext.Provider>
  );
}

export default TheProvider