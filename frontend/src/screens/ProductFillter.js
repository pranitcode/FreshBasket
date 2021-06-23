import React from 'react';

import './ProductFillter.css';

const ProductFilter = (props) => {

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
};
    



  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='fruits'>fruits</option>
          <option value='veg'>veg</option>
          <option value='All'>All</option>
       </select>
      </div>
    </div>
  );
};

export default ProductFilter;