import  { useCallback, useState } from 'react';

export const ApiExterna = () => {

  const [apiInfo, setApiInfo] = useState([]);

  let myApi = "https://reqres.in/api/photo";
//
  const llamadaApi = useCallback( async () => {
    const respuesta = await fetch(myApi);

    const res = await respuesta.json();
    setApiInfo(res.data);
  },  [apiInfo]
  );
   

  return {
    apiInfo,
    setApiInfo,
    llamadaApi
  };
}
