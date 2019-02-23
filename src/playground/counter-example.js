class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    
    try {
      const numAsString = localStorage.getItem('count');
      const number = parseInt(numAsString, 10);
      console.log('number was ' + number);
      if (!isNaN(number)) {
        this.setState(() => {
          return {count: number};
        });
      }
    } catch (error) {
      
    }
  }

  componentDidUpdate(prevPros, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Update number is ' + this.state.count);
      localStorage.setItem('count', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount!');
  }

  handleAddOne() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState((previousState) => {
      return {
        count: previousState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter count={2}/>, document.getElementById('app'));

// let count = 0;

// const addOne = () => {
//   console.log('addOne');
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   console.log('minusOne');
//   count--;
//   renderCounterApp();
// };

// const reset = () => {
//   console.log('reset');
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//     <h1>Count: {count} </h1>
//     <button onClick={addOne}> +1 </button>
//     <button onClick={minusOne}> -1 </button>
//     <button onClick={reset}> reset </button>
//     </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();