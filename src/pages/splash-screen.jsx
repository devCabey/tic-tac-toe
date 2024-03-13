import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getUser } from '../cache';
import _ from 'lodash';
import Signin from '../components/Signin';

const SplashScreen = () => {
  const user = getUser();
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (_.isEmpty(user)) {
      setSearchParams((prev) => ({ ...prev, modal: 'signin' }));
    } else {
      setSearchParams((prev) => ({ ...prev, modal: undefined }));
    }
  }, [user, setSearchParams]);

  return (
    <>
      <div className='w-screen h-screen bg-slate-50 flex justify-center items-center'>
        <div className='flex justify-center items-center flex-col space-y-5'>
          <h1>WELCOME BACK, {user?.name}</h1>
          <Link
            to='/game'
            className='border px-2 py-1 text-sm font-bold rounded bg-amber-200 hover:text-white hover:bg-amber-400'>
            Start Game
          </Link>
        </div>
      </div>
      <Signin />
    </>
  );
};

export default SplashScreen;
