var React = require('react');

var EnabledInputBox = React.createClass({
  propTypes: {
    placeholderText: React.PropTypes.string,
    dynoText: React.PropTypes.string,
    frequencyText: React.PropTypes.string,
    dueText: React.PropTypes.string,
    index: React.PropTypes.number,
    saveUpdatedState: React.PropTypes.func,
    removeEnabledForm: React.PropTypes.func
  },

  updateStateInParent:function() {
    this.props.saveUpdatedState(this.props.index,
      this.refs.EnabledInput.value,
      this.refs.EnabledSelect.value,
      this.refs.EnabledFrequency.value,
      this.refs.EnabledDue.value,
      this.props.enabledEditingState,
      this.props.disableEditingState
    );
  },

  turnOffEditmode:function() {
    this.props.disableEditing();
  },

  removeEnabledForm:function() {
    this.props.removeEnabledForm(this.props.index);
  },

  render:function() {
    return (
      <div>
        <input type ="text"
          type="text" className="form-control"
          placeholder={this.props.placeholderText}
          defaultValue={this.props.placeholderText}
          ref="EnabledInput"
        />
        <div> Dyno </div>
        <select ref="EnabledSelect">
          <option> {this.props.dynoText}  </option>
          <option> 1x </option>
          <option> 2x </option>
          <option> px </option>
        </select>

        <div className="form-group">
          Frequency
          <select ref="EnabledFrequency">
            <option value = {this.props.frequencyText}> {this.props.frequencyText} </option>
            <option> Daily </option>
            <option> Hourly </option>
            <option> Every 10 minutes </option>
          </select>
        </div>

        <div className="form-group">
          Next Due
          <span> Nov 25 </span>
           <select ref="EnabledDue">
            <option defaultValue={this.props.dueText}> {this.props.dueText} </option>
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
        <div ref={this.props.index}></div>
        <button className="btn btn-success" onClick={this.updateStateInParent}> Save </button>
        <button className="btn btn-danger" onClick={this.removeEnabledForm}> Remove </button>
       </div>
    )
  }
});

module.exports = EnabledInputBox;
