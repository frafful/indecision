import React from 'react';
import Option from './Option.js';


const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
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
  );
};

export default Options;