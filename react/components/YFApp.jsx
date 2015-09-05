'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Navigation = Router.Navigation;
var YFStore = require('../stores/YFStore.jsx');

/** Tips: We often pass the entire state of the store down the chain of views in a single object, allowing different descendants to use what they need.
**/
var YFApp = React.createClass({
  getInitialState: function() {
    YFStore.getStateFromStorage();
    return {
      user: YFStore.getUser(),
      loggedIn: YFStore.getLoggedIn()
    };
  },

  componentDidMount: function() {
    YFStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    YFStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className='container'>
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/"><h4>YangFan Enrollment</h4></a>
            </div>

            <div id="navbar" className="navbar-collapse collapse">
              <form className="navbar-form navbar-right">
              {this.state.loggedIn ? <a href='/' className='btn btn-danger'>Log out</a> : <a href='/login' className='btn btn-success'>Log in</a> }
                &nbsp; &nbsp;
                <a href='/signup' className='btn btn-primary'>Sign up</a>
              </form>
            </div>
          </div>
        </nav>

        <div className="page-container">
          <RouteHandler />
        </div>
      </div>
    );
  },

  _onChange: function() {
    this.setState({ user: YFStore.getUser(), loggedIn: YFStore.getLoggedIn() });
  }
});

module.exports = YFApp;