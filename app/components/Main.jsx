var React = require('react');

//Basic presentational component that would only have a render function
// rewritten using arror functions from ES6.
var Main = (props) => {
  return (
    <div>
      <div className="row">
        <div className="small-centered medium-6 large-4 columns">
          <p className="text-center">Boilerplate App</p>
          <p><img src="/images/logo.png"/></p>
          <p><i className="fi-social-youtube"></i></p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
