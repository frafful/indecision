import React from 'react';

export default class AddOption extends React.Component {
  state = { error: undefined };

  handleSubmit = (e) => {
    //Avoid the default submit process
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option" />
          <button 
            className="btn btn--purple btn--border-bottom-s"
          >
            Add Option
          </button>
        </form>
      </div>
    );
  }
}