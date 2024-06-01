import { Children } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import '../main.css'


export default function Layout() {
  return (
      <div className='App'>
        <Header />
        <Outlet />
      </div>
  );
}
