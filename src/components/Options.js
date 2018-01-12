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
    <div className="">
      <ol>
        {
          props.options.map((option) => (
            <Option
              key={option} 
              optionText={option} 
              handleDeleteOption={props.handleDeleteOption}
              />)
          )
        }
      </ol>
    </div>
  </div>
);

export default Options;