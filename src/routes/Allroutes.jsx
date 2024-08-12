import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomNavbar from '../components/Navbar';
import Homepage from '../pages/Homepage';
import BackToSchool from '../components/BackToSchool';
import Bags from '../components/Bags';
import Travel from '../components/Travel';
import Accessories from '../components/Accessories';
import Apparel from '../components/Apparel';
import Kids from '../components/Kids';
import Sale from '../components/Sale';
import Accountpage from '../pages/Accountpage';
import Cartpage from '../pages/Cartpage';
import Description from '../pages/Description';

const AllRoutes = () => {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/back-to-school" element={<BackToSchool />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/apparel" element={<Apparel />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/sale" element={<Sale />} />
        <Route path='/account' element={<Accountpage />}></Route>
        <Route path="/description" element={<Description />} />
        <Route path='/sale' element={<Sale />}></Route>
        <Route path='/cart' element={<Cartpage />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
