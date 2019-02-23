import React from 'react';
import ReactDOM from 'react-dom';

const Layout = (inputProps) => {
  return (
    <div>
      <p>header</p>
      {inputProps.children}
      <p>footer</p>
    </div>
  );
};

const template = (
  <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </div>
);

ReactDOM.render(<Layout>{template}</Layout>, document.getElementById('app'));