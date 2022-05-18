import React from 'react';
import Sidebar from './sidebar';
import Center from './centerContent';
import Sidebtns from './sidebuttons';

export default function Main() {
  return (
    <>
    <div className='main-Area'>
    <Sidebar />
    <Center />
    <Sidebtns />
    </div>
    </>
  );
}
