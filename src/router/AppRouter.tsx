import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { PageNotFound } from '../components/PageNotFound';
import CreatingUser from '../pages/CreatingUser';
import Home from '../pages/Home'
import NewUser2 from '../pages/NewUser2';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/newuser2"} element={<NewUser2 />} />
        <Route path={"/creatinguser"} element={<CreatingUser />} />
        <Route path={"/*"} element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AppRouter