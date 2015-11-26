var React = require("react");

var ShowForm = React.createClass({
  propTypes: {
    passPropsToState: React.PropTypes.func
  },

  getProps:function() {
    var propsAsArray = [];
    propsAsArray.push(this.refs.inputValue.value);
    propsAsArray.push(this.refs.dyno.value);
    propsAsArray.push(this.refs.frequency.value);
    propsAsArray.push(this.refs.due.value);
    this.props.passPropsToState(propsAsArray);
    propsAsArray.length = 0;
  },

  render:function() {
    return (
      <div>
        <input type="text"
          className="form-control"
          placeholder="Text input"
          ref="inputValue"
        />
        <div className="form-group">
          Dyno Size
          <select ref="dyno">
            <option> 1x </option>
            <option> 2x </option>
            <option> px </option>
          </select>
        </div>

        <div className="form-group">
          Frequency
          <select ref = "frequency">
            <option> Daily </option>
            <option> Hourly </option>
            <option> Every 10 minutes </option>
          </select>
        </div>

        <div>
          Last Run
          <p> Never </p>
        </div>

        <div className="form-group">
          Next Due
          <span> Nov 25 </span>
          <select ref="due">
            <option> 1 </option>
            <option> 2 </option>
            <option> 3 </option>
            <option> 4 </option>
            <option> 5 </option>
            <option> 6 </option>
            <option> 7 </option>
            <option> 8 </option>
            <option> 9 </option>
            <option> 10 </option>
            <option> 11 </option>
            <option> 12 </option>
            <option> 13 </option>
            <option> 14 </option>
            <option> 15 </option>
            <option> 16 </option>
            <option> 17 </option>
            <option> 18 </option>
            <option> 19 </option>
            <option> 20 </option>
            <option> 21 </option>
            <option> 22 </option>
            <option> 23 </option>
            <option> 24 </option>
          </select>
        </div>

        <button className="btn btn-primary"
          onClick={this.getProps}> Submit form </button>
      </div>
    );
  }
});

module.exports = ShowForm;
