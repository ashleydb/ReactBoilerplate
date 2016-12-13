var React = require('react');

//Basic presentational component that would only have a render function
// rewritten using arror functions from ES6.
var Main = (props) => {
  return (
    <div>
      <p>Main.jsx Rendered</p>
      {props.children}
    </div>
  );
}

module.exports = Main;
