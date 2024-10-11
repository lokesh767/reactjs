import React from 'react';
import { data } from './data';
import  {Cards}  from './Cards';

export default function Container() {
  const dataitems= Object.values(data).flat();

  return (

    <div>
        <h1>Products</h1>
        <Cards allproducts={dataitems}/>
    </div>
  )
}
