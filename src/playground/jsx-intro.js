console.log('App.js is running');

const appData = {
  title: 'Vietnam',
  subtitle: 'An Epic Tragedy',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;

  if (option) {
    appData.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const onRemoveAll = () => {
  appData.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * appData.options.length);
  const option = appData.options[randomNumber];
  alert(option);
};

const appRoot = document.getElementById('app');

const renderApp = () => {
  // JSX - Javascript XML (JS extension provided by react)
  const template = (
    <div>
      <h1>Title: {appData.title}</h1> 
      {appData.subtitle && <p>Subtitle: {appData.subtitle}</p>}
      <p>{appData.options.length > 0 ? 'Here are your options' : 'No Options'}</p>      
      <button disabled={ appData.options.length === 0 } onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>        
        {
          appData.options.map((option) => {
            return <li key={option}>{option}</li>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  
  ReactDOM.render(template, appRoot);
};

renderApp();