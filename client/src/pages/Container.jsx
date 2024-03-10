import { Routes, Route, Navigate, Link} from 'react-router-dom';
import Profile from './Profile';
import Landlords from '../components/Landlords';
import Tenants from '../components/Tenants'
import Feedbacks from './../components/Feedbacks';
import ProtectedRoutes from './../components/ProtectedRoutes';
import { useEffect, useState } from 'react';
export default function Container() {
  const [user,setUser]= useState();
  function fetchUser(){
    setUser(JSON.parse(localStorage.getItem("User")));
  }
  useEffect(()=>{
    fetchUser();
  },[])
  return (
    <div className='flex flex-row'>
      <div className="bg-gray-100 w-2/12 h-screen">
        <ul className="w-full my-4 flex flex-col gap-y-2">
          <Link
          to="/container/profile"
          ><li className="mx-2 p-1 rounded-sm hover:bg-slate-50 cursor-pointer capitalize">Profile</li></Link>
          {
            (user?.Role == "ADMIN")?
            (
            <>
              <Link to="/container/landlords">
                <li className="mx-2 p-1 rounded-sm hover:bg-slate-50 cursor-pointer capitalize">landlords</li>
              </Link>
              <Link to="/container/tenants">
                <li className="mx-2 p-1 rounded-sm hover:bg-slate-50 cursor-pointer capitalize">tenants</li>
              </Link>
              <Link to="/container/feedbacks">
                <li className="mx-2 p-1 rounded-sm hover:bg-slate-50 cursor-pointer capitalize">feedbacks</li>
              </Link> 
            </>
            ):null
          }
        </ul>
      </div>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Navigate to="profile" />} />
          <Route path="/profile" element={<Profile />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="/landlords" element={<Landlords />} />
            <Route path="/tenants" element={<Tenants />} />
            <Route path="/feedbacks" element={<Feedbacks />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}