'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Navigation = Router.Navigation;
var YFActions = require('../actions/YFActions');
var YFStore = require('../stores/YFStore.jsx');

var Footer = require('./helpers/Footer.jsx');
/** Tips: We often pass the entire state of the store down the chain of views in a single object, allowing different descendants to use what they need.
**/
var YFApp = React.createClass({
  mixins: [ Navigation ],
  getInitialState: function() {
    YFStore.getUserFromStorage();
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

  handleLogout: function(e) {
    var self = this;
    YFActions.logout();
    self.transitionTo('home');
  },

  render: function() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div>
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/"><h4>YangFan Enrollment</h4></a>
            </div>

            <div className="navbar-collapse collapse">
              <form className="navbar-form navbar-right">
              {this.state.loggedIn ? 
                <button className='btn btn-danger' onClick={this.handleLogout}>Log out
                  <span><strong>&nbsp;({this.state.user.email})</strong></span>
                </button>
                : <p></p>}
              </form>
            </div>
          </div>
        </nav>
        
        <div>
          <RouteHandler />
        </div>

        <Footer />
      </div>
    );
  },

  _onChange: function() {
    this.setState({ user: YFStore.getUser(), loggedIn: YFStore.getLoggedIn() });
  }
});

module.exports = YFApp;