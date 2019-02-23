class VisibilityToggle extends React.Component {

  constructor(props) {
    super(props);

    this.buttonClicked = this.buttonClicked.bind(this);

    this.state = {
      showDetails: false
    };
  }

  buttonClicked() {
    this.setState((previousState) => {
      return {
        showDetails: !previousState.showDetails
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibilty Toggle</h1>
        <button onClick={this.buttonClicked}>
        {
          this.state.showDetails ? 'Hide Details' : 'Show Details'
        }
        </button>
        { this.state.showDetails &&
          (<div>
             <p>Here are the details!</p>
           </div>
          )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));