import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
 
export default class IndecisionApp extends React.Component {
  state = { options: [] };
  
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (option) => {
    this.setState((prevState) => ({ options: prevState.options.filter(o => o !== option) }));
  };

  handlePick = () => {
    const randomOptionNumber = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomOptionNumber]);
  };

  handleAddOption = (option) => {
    if(!option) {
      return 'Enter a valid value.'
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This options already exists.'
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  };

  componentDidMount() {

    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);

      console.log("Component did update");
    }
  } 

  componentWillUnmount() {
    console.log("Component will unmount");
  }
  
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};