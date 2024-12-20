import React from 'react';
import { IoMdAdd } from "react-icons/io";
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import {  dropdownData } from '../Data/dummy';
import { useStateContext } from '../Contexts/ContextProvider';
import product9 from '../Data/product9.jpg';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center file-upload-div">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex flex-end items-center">
           <input type='file'  className='file-upload'/>

          
          </div>
          <div className="mt-6">
           
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex flex-end items-center">
           <input type='input'  className='file-upload'/>

          
          </div>
          <div className="mt-6">
           
          </div>
        </div>
      </div>

    </div>
  );
};

export default Ecommerce;