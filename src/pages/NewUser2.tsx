import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext, PropsMyGlobal } from "../context/MyProvider/GlobalContext";

const NewUser2 = () => {

 const { state, addUser } = useContext<PropsMyGlobal>(GlobalContext);

 const [first, setFirst] = useState<any>([{
    name: "",
    job: "",
    major: ""
 }]);


function handleChange(event: any) {
  event.preventDefault();
   setFirst({ ...first, [event.target.name]: event.target.value });
};

//
function handleSubmit(event: any) {
  event.preventDefault();

addUser({ name: first.name, 
           job: first.job, 
         major: first.major  });

    setFirst("");

};
 

  return (
    <>
      <h1>Add a new user</h1>
      <Link to={"/"}>Go to Home</Link>

      <form className="myform" onSubmit={handleSubmit}>
        <input
          type="text"
          value={first.name || ""}
          onChange={handleChange}
          name="name"
          placeholder="Text the name.."
          required
        />
        <input
          type="text"
          name="job"
          value={first.job || ""}
          onChange={handleChange}
          placeholder="Text the job.."
          required
        />
        <select
          name="major"
          value={first.major || ""}
          onChange={handleChange}
          required
        >
          {" "}
          <option value={"null"}>- -</option>
          <option value={"true"}>Yes</option>
          <option value={"false"}>No</option>
        </select>
        <button type="submit">click here</button>
      </form>
      <div className="divMappingInfo">
        {!state.Info2
          ? "Loading"
          : state.Info2.map((item: any) => (
              <div className="mydiv" key={item.id}>
                <p>
                  <span>Id: </span> {item.id} {" - "} <span>Name: </span>{" "}
                  {item.name}
                  {" - "}
                  <span>Age: </span>
                  {item.major ? "major" : "menor"}
                </p>
              </div>
            ))}
      </div>
    </>
  );
}

export default NewUser2