import React, {  useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/MyProvider/GlobalContext';
import { TheGlobalContext } from '../context/TheProvider/TheGlobalContext';

const Home = () => {


      const { state2, apiInfo, llamadaApi, deleteOne2 } = useContext(TheGlobalContext);
      const { state, changeTOGGLE, deleteOne } = useContext(GlobalContext);

useEffect(() => {
  llamadaApi();
}, []);

  return (
    <div className="divHome">
      <h1 className='textHome'>
        <u>Home</u>
        <hr />
      </h1>
      <div className="divHome2">
        <div className="div1">
          <Link to={"/creatinguser"}>
            <h3>Add a user</h3>
          </Link>
          {!state2.Info
            ? "Loading"
            : state2.Info.map((item: any) => (
                <div className="mydiv" key={item.id}>
                  <p>
                    {item.id} - {item.name}
                  </p>
                  <button
                    onClick={() => deleteOne2(item.id)}
                    className={"btn-delete"}
                  >
                    {" "}
                    Delete user
                  </button>
                </div>
              ))}
        </div>
        <hr />
        <div className="div2">
          <h4>API call external</h4>
          {!apiInfo
            ? "Loading"
            : apiInfo.map((item: any) => (
                <div className="mydiv" key={item.id}>
                  <p>
                    {item.id} - {item.name}
                  </p>
                </div>
              ))}
        </div>
        <hr />
        <div className="div3">
          <Link to={"/newuser2"}>
            <h3>Add a user</h3>
          </Link>

          {!state.Info2
            ? "Loading"
            : state.Info2.map((item: any) => (
                <div className="mydiv" key={item.id}>
                  <p>
                    {item.id} {item.name}
                    {" - "} {item.job}
                  </p>
                  <span
                    onClick={() => changeTOGGLE(item.id)}
                    className={item.major ? "divMajorG" : "divMajorR"}
                  >
                    {item.major ? "Yes" : "No"}
                  </span>
                  <button
                    onClick={() => deleteOne(item.id)}
                    className={"btn-delete"}
                  >
                    Delete user
                  </button>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Home