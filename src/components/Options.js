import React from 'react';
import Option from './Option.js';


const Options = (props) =>  
(
  <div className="options"> 
    <div className="options__header clear-fix">
      <h3 className="heading-tertiary float-left">Your Options</h3>
      <button 
      onClick={props.handleDeleteOptions}
      className="btn-transparent float-right"
      >
        Remove All
      </button>
    </div>
      {
        props.options.map((option, index) => (
          <Option
            key={option} 
            optionText={option}
            count={index + 1} 
            handleDeleteOption={props.handleDeleteOption}
            />)
        )
      }
  </div>
);

export default Options;