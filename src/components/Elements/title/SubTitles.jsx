/* eslint-disable react/prop-types */
import React from 'react';

function SubTitles(props) {
  const { variants, childrens } = props;
  return (
    <p className={`${variants}`}>
      {childrens}
    </p>
  );
}

export default SubTitles;
