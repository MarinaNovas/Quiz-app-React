import React from "react";
import PropTypes from 'prop-types'
import Category from '../categories'

function CategorySelector({category, changeCategory}){
  return (
    <div className="category">
      <label for="">Select category</label>
      <select value={category} onChange={changeCategory()}>
        {
          Category.map((category,index)=>(
            <option  key={index} value={category.id}dangerouslySetInnerHTML={{__html:category.name}}/>
          ))
        }
      </select>
    </div>
  );
}

CategorySelector.propTypes={
  category:PropTypes.string.isRequired,
  changeCategory:PropTypes.func.isRequired
};

export default CategorySelector;