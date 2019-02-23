const obj = {
  name: 'Vikram',
  getName() {
    return this.name;
  }
};

class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleRandomPick = this.handleRandomPick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    this.state = {
      options: []
    };
  }

  componentDidMount() {

    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
      
    } catch (error) {
        // do nothing for now
    }     
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount!');
  }

  // handle delete options
  // shorthand for implicit return if 1 line
  handleDeleteOptions() {
    this.setState(() => ({ options: []}));    
  }

  handleDeleteOption(optionToRemove) {
    this.setState((previousState) => ({
      options: previousState.options.filter((option) => optionToRemove !== option )
    }));
  }  

  handleRandomPick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomNumber];    
  }

  handleAddOption(option) {

    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    } else {

    }

    this.setState((previousState) => ({
      options: previousState.options.concat(option)
    }));
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';   

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handleRandomPick={this.handleRandomPick}/>
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
         />
        <AddOption 
          handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) =>  {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handleRandomPick}
        disabled={!props.hasOptions}>
        What should I do?</button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      { props.options.length === 0 && <p>Please add an option to get started!</p> }
      {
        props.options.map((option) => (
           <Option 
              key={option} 
              optionText={option}
              handleDeleteOption={props.handleDeleteOption}
            />
        ))
      }        
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
     {props.optionText}
     <button 
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}>Remove</button>
    </div>
  );
};

class AddOption extends React.Component {

  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      error: undefined
    };
  }

  onFormSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);   

    this.setState(() => ({error: error}));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));