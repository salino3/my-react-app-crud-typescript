import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropsTheGlobal, TheGlobalContext } from '../context/TheProvider/TheGlobalContext';

const CreatingUser = () => {

   const { state2, addUser2 } = useContext<PropsTheGlobal>(TheGlobalContext);

   const [first, setFirst] = useState<any>([{
  name: "",
  username: "",
  email: "",
  address: "",
  phone: ""
   }]);

   const {
    name,
    username,
    email,
    address,
    phone } = first;

function handleChange(event: any) {
  event.preventDefault();

   setFirst({ ...first, [event.target.name]: event.target.value });
};

//
   function handleSubmit(event: any) {
    event.preventDefault();

    addUser2(first);
    setFirst("");
   };

  return (
    <>
      <h1>Add a new user</h1>
      <Link to={"/"}>Go to Home</Link>

      <form className='myform' onSubmit={handleSubmit}>
        <input required type="text" name="name" onChange={handleChange} value={name || ""} placeholder={"Text the name"} /> <br />
        <input required type="text" name="username" onChange={handleChange} value={username || ""} placeholder={"Text the username"} /> <br />
        <input required type="email" name="email" onChange={handleChange} value={email || ""} placeholder={"Text the email"} /> <br />
        <input required type="text" name="address" onChange={handleChange} value={address || ""} placeholder={"Text the address"} /> <br />
        <input required type="number" name="phone" onChange={handleChange} value={phone || ""} placeholder={"Text the phone"} /> <br />
        <button type='submit'>Submit</button>
      </form>
          <div className='divMappingInfo'>
      {!state2.Info
        ? "Loading"
        : state2.Info.map((item: any) => (
            <div className="mydivcreating" key={item.id}>
              <p>
                <span>Id: </span> {item.id} - <span>Name: </span>
                {item.name}
                <br />
                <span>User: </span>
                {item.username} - <span>Email: </span>
                {item.email}
                <br />
                <span>Address: </span> {item.address} - <span>Phone: </span>
                {item.phone}
              </p>
            </div>
          ))}
         </div>
    </>
  );
}

export default CreatingUser