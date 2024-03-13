import React, { useState } from 'react';
import Modal from './Modal';
import _ from 'lodash';
import { setUser } from '../cache';
import { useSearchParams } from 'react-router-dom';

const Signin = () => {
  const [name, setName] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleOnContinue = () => {
    let user = {};
    user.name = name;
    setUser(user);
    setSearchParams((prev) => ({ ...prev, modal: undefined }));
  };
  return (
    <Modal type={'signin'}>
      <div className='space-y-5'>
        <div>
          <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
            Please enter your name
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className='block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 focus-visible:outline-amber-500 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6'
              placeholder='John Doe'
            />
          </div>
        </div>
        <div className='w-full flex justify-end items-center '>
          <button
            type='button'
            disabled={_.isEmpty(name)}
            onClick={handleOnContinue}
            className='rounded-md bg-amber-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500'>
            Continue
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Signin;
