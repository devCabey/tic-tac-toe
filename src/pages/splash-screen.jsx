import React from 'react';
import { getUser } from '../cache';

const SplashScreen = () => {
  const user = getUser();
  return (
    <div className='w-screen h-screen bg-slate-50 flex justify-center items-center'>
      <div>
        <h1>WELCOME BACK, {user?.name}</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
