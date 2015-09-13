'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Navigation = Router.Navigation;
var YFActions = require('../../actions/YFActions');
var YFStore = require('../../stores/YFStore.jsx');

var ContactBox = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},
  render: function() {
    return (
				<div className="col-md-6">								
					<div className="panel panel-default">
					
						<div className="panel-heading">
							<div className="panel-title">{this.props.title}</div>
						</div>

						<div className="panel-body">

							<div className="form-group">
								<label className="control-label">Emergency Contact Name<span className="req">*</span></label>
								
								<div className="input-group  input-group-minimal">
									<span className="input-group-addon">
										<i className="linecons-user"></i>
									</span>
									<input type="text" required ref='name' className="form-control"/>
								</div>								
							</div>

							<div className="form-group">
								<label className="control-label">Relationship<span className="req">*</span></label>
								
								<div className="input-group  input-group-minimal">
									<span className="input-group-addon">
										<i className="linecons-user"></i>
									</span>
									<input type="text" required ref='relationship' className="form-control" placeholder="eg. mother"/>
								</div>								
							</div>

							<div className="form-group">
								<label className="control-label">Cell Phone<span className="req">*</span></label>
								
								<div className="input-group  input-group-minimal">
									<span className="input-group-addon">
										<i className="linecons-mobile"></i>
									</span>
									<input type="text" required ref='cellPhone' className="form-control"/>
								</div>
							</div>

							<div className="form-group">
								<label className="control-label">Work Phone<span className="req">*</span></label>
								
								<div className="input-group  input-group-minimal">
									<span className="input-group-addon">
										<i className="linecons-mobile"></i>
									</span>
									<input type="text" required ref='workPhone' className="form-control"/>
								</div>
							</div>

							<div className="form-group">
								<label className="control-label">Home Phone<span className="req">*</span></label>
								
								<div className="input-group  input-group-minimal">
									<span className="input-group-addon">
										<i className="linecons-mobile"></i>
									</span>
									<input type="text" required ref='homePhone' className="form-control"/>
								</div>
							</div>

							<div className="form-group">
								<label className="control-label">Email</label>
								
								<div className="input-group  input-group-minimal">
									<span className="input-group-addon">
										<i className="linecons-mail"></i>
									</span>
									<input type="text" ref='email' className="form-control"/>
								</div>
							</div>
						</div>	
					</div>
				</div>
    );
  }
});

module.exports = ContactBox;