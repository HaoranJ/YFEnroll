'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Navigation = Router.Navigation;
var YFActions = require('../actions/YFActions');
var YFStore = require('../stores/YFStore.jsx');
var results = require('../../lib/EnrollResults.json');

var SideMenu = require('./helpers/SideMenu.jsx');
var EnrollmentPreview = require('./helpers/EnrollmentPreview.jsx');

var ConfirmPage = React.createClass({
  mixins: [ Navigation ],
  getInitialState: function() {
    YFActions.loadEnrollment();
    YFStore.setSideHighlight('confirm');
    return { 
      done: false,

      incomingGrade: YFStore.getIncomingGrade(),
      summerCampWeeks: YFStore.getSummerCampWeeks(),
      enrollment: YFStore.getEnrollment()
    };
  },
  componentDidMount: function() {
    YFStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    YFStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState({
      incomingGrade: YFStore.getIncomingGrade(),
      summerCampWeeks: YFStore.getSummerCampWeeks(),
      enrollment: YFStore.getEnrollment()
    });
  },
  handleConfirm: function(e) {
    e.preventDefault();
    this.setState({ done: true });
  },
  handleContinue: function(e) {
    var self = this;
    YFActions.sendConfirmEmail(function() {
      self.transitionTo('complete');
    });
  },

  render: function () {
    var self = this;
    var test = 'testItem';
    return (
      <div className="page-container">
        <SideMenu />
        <div className='main-content col-md-12'>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <div className="panel-title">
                <h3>Preview of Summer Camp Enrollment</h3>
              </div>
            </div>

            <div className="panel-body">
              <div className="row">
                <pre>
                  {typeof this.state.enrollment === 'undefined' ?
                  <p></p> :
                  <EnrollmentPreview results={this.state.enrollment}/>}
                  
                </pre>
              </div>
            </div>
          </div>

          <div className="row">
            <div className='col-md-offset-1'>
              <button onClick={this.handleConfirm} ref='confirmButton' className="btn btn-primary btn-lg">Confirm</button>&nbsp; <br></br>
            </div>
          </div>

          {this.state.done ? <button type="button" className="col-md-offset-10 btn btn-success btn-lg" onClick={this.handleContinue}>Continue</button> : <p></p>}
        </div>
      </div>
    );
  } 
});

module.exports = ConfirmPage;