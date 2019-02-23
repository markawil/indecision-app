import React from 'react';
import AddOption from './AddOptions';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
  };

  handleResetSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  // handle delete options
  // shorthand for implicit return if 1 line
  handleDeleteOptions = () => {
    this.setState(() => ({ options: []}));    
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((previousState) => ({
      options: previousState.options.filter((option) => optionToRemove !== option )
    }));
  };

  handleRandomPick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];    
    this.setState(() => ({
      selectedOption: option })
    );
  };

  handleAddOption = (option) => {

    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    } else {

    }

    this.setState((previousState) => ({
      options: previousState.options.concat(option)
    }));
  };

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

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';   

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <div className="container">          
          <Action 
            hasOptions={this.state.options.length > 0}
            handleRandomPick={this.handleRandomPick}/>
          <div className="widget">
            <Options 
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
              handleAddOption={this.handleAddOption} />
          </div>
        </div>        
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleResetSelectedOption={this.handleResetSelectedOption}
         />
      </div>
    );
  }
}

export default IndecisionApp;