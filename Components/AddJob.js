var React = require('react');

var AddJob = React.createClass({
  propTypes: {
    setClickedState: React.PropTypes.func
  },

  render:function() {
    return (
      <button className="btn btn-primary"
      onClick={this.props.setClickedState}> Add new job </button>
    )
  }
})

module.exports = AddJob;
