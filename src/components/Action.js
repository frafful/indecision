import React from 'react';

const Action = (props) => 
  (
    <button 
      href="#"
      disabled={!props.hasOptions} 
      onClick={props.handlePick}
      className="btn btn--l btn--purple btn--border-bottom-l u-margin-bottom-medium"
      >
        What Should I Do?
    </button>
  ); 

export default Action; 