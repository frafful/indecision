class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }

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
  
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(option) {
    this.setState((prevState) => ({ options: prevState.options.filter(o => o !== option) }));
  }

  handlePick() {
    const randomOptionNumber = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomOptionNumber]);
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter a valid value.'
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This options already exists.'
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
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
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
    return (
      <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
    );
}

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
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
        >
          Remove
        </button>
    </div>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: undefined
    };
  }
  
  handleSubmit(e) {
    //Avoid the default submit process
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp options={['Option One', 'Option Two']} />, document.getElementById('app'));