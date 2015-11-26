var React = require('react');

var DisabledForm = React.createClass({
  propTypes: {
    placeholderText: React.PropTypes.string,
    dynoText: React.PropTypes.string,
    frequencyText: React.PropTypes.string,
    dueText: React.PropTypes.string,
    enableEditing: React.PropTypes.func,
    index: React.PropTypes.number,
    removeDisabledForm: React.PropTypes.func
  },

  turnOnEditMode:function() {
    this.props.enableEditing();
  },

  removeDisabledForm:function() {
    this.props.removeDisabledForm(this.props.index);
  },

  render:function() {
    return (
      <div>
        <input type ="text"
          type="text" className="form-control"
          placeholder={this.props.placeholderText}
          value={this.props.placeholderText}
          disabled
        />

        <div> Dyno </div>
        <select disabled>
          <option> {this.props.dynoText}  </option>
          <option> 1x </option>
          <option> 2x </option>
          <option> px </option>
        </select>

        <div className="form-group">
          Frequency
          <select disabled>
            <option value = {this.props.frequencyText}> {this.props.frequencyText} </option>
            <option> Daily </option>
            <option> Hourly </option>
            <option> Every 10 minutes </option>
          </select>
        </div>

        <div className="form-group">
          Next Due
          <span> Nov 25 </span>
           <select>
            <option value={this.props.dueText} disabled> {this.props.dueText} </option>
            <option disabled> 2 </option>
            <option disabled> 3 </option>
            <option disabled> 4 </option>
            <option disabled> 5 </option>
            <option disabled> 6 </option>
            <option disabled> 7 </option>
            <option disabled> 8 </option>
            <option disabled> 9 </option>
            <option disabled> 10 </option>
            <option disabled> 11 </option>
            <option disabled> 12 </option>
            <option disabled> 13 </option>
            <option disabled> 14 </option>
            <option disabled> 15 </option>
            <option disabled> 16 </option>
            <option disabled> 17 </option>
            <option disabled> 18 </option>
            <option disabled> 19 </option>
            <option disabled> 20 </option>
            <option disabled> 21 </option>
            <option disabled> 22 </option>
            <option disabled> 23 </option>
            <option disabled> 24 </option>
          </select>
        </div>
        <button className="btn btn-danger" onClick={this.removeDisabledForm}> Remove </button>
      </div>
    );
  }
});

module.exports = DisabledForm;
