var React = require('react');
var ReactDOM = require('react-dom');
var update = require('react-addons-update');

var MainForm = React.createClass({
  getInitialState: function () {
    return {
      clicked: false,
      formData: [],
      editMode: false
    };
  },

  handleChange:function() {
    this.setState({clicked: true});
  },

  addToFormState: function() {
    var inputValue = this.refs.inputValue.value;
    var dynoValue = this.refs.dyno.value;
    var frequencyValue = this.refs.frequency.value;
    var dueValue = this.refs.due.value;
    this.updateFormState(inputValue, dynoValue, frequencyValue, dueValue);
  },

  updateFormState:function(inputValue, dynoValue, frequencyValue, dueValue) {
    var currentFormState = this.state.formData;
    var newFormState = update(currentFormState,
      {$unshift: [{
        inputText: inputValue,
        dynoText: dynoValue,
        frequencyText: frequencyValue,
        dueText: dueValue,
        index: ""
      }]});
    this.setState({formData: newFormState});
    this.changeStateOfFormToDefault();
  },

  changeStateOfFormToDefault:function() {
    this.setState({clicked: false});
  },

  renderAddNewJob:function() {
    if(this.state.clicked) {
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
            <span> Nov 24 </span>
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
            onClick={this.addToFormState}> click me </button>
        </div>
      )
    }
    else {
      return (
        <div>
            <button className="btn btn-primary"
            onClick={this.handleChange}> Add new job </button>
        </div>
      )
    }
  },

  render:function() {
    var formData = this.state.formData.map(function(formData, index) {
      console.log(formData);
      return (
        <div>
          <div key = {index + formData.dueText}> </div>

            <div> {formData.inputText} </div>
            <div> {formData.dynoText} </div>
            <div> {formData.frequencyText} </div>
            <div> {formData.dueText} </div>
            <div> {index} </div>
        </div>
      )
    });
    return (
      <div>
        {formData}
        {this.renderAddNewJob()}
      </div>
    );
  }
});

ReactDOM.render(<MainForm />, document.getElementById('main'));
