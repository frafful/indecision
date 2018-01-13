import React from 'react';

const Option = (props) => 
(
  <div className="option clear-fix">
    <p className="float-left">{props.count}. {props.optionText} </p>
    <button className="btn-transparent float-right"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
      >
        Remove
      </button>
  </div> 
);

export default Option;
