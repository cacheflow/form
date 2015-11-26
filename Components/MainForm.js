var React = require('react');
var ReactDOM = require('react-dom');
var update = require('react-addons-update');
var ShowForm = require('./ShowForm');
var DisabledForm = require('./Disabled/DisabledForm');
var EnabledForm = require('./Enabled/EnabledForm');
var AddJob = require('./AddJob');

var MainForm = React.createClass({
  getInitialState: function () {
    return {
      clicked: false,
      formData: [],
      editing: false,
      cancelEditing: false,
      index: 0
    };
  },

  setClickedState:function() {
    this.setState({clicked: true});
  },

  passPropsToState: function(propsFromShowForm) {
    var inputValue = propsFromShowForm[0];
    var dynoValue = propsFromShowForm[1];
    var frequencyValue = propsFromShowForm[2];
    var dueValue = propsFromShowForm[3];
    this.setIndexState();
    this.setFormState(inputValue, dynoValue, frequencyValue, dueValue);
  },

  setIndexState:function() {
    var newIndexState = this.state.index += 1;
    this.setState({index: newIndexState});
  },


  setFormState:function(inputValue, dynoValue, frequencyValue, dueValue) {
    var currentFormState = this.state.formData;
    console.log("your index in set form state is", this.state.index);
    var newFormState = update(currentFormState,
      {$unshift: [{
        inputText: inputValue,
        dynoText: dynoValue,
        frequencyText: frequencyValue,
        dueText: dueValue,
        index: this.state.index
      }]});
    this.setState({formData: newFormState});
    this.changeStateOfFormToDefault();
  },

  changeStateOfFormToDefault:function() {
    this.setState({clicked: false});
  },

  enableEditing:function() {
    this.setState({editing: true});
    this.setState({cancelEditing: true});
  },

  shouldComponentUpdate:function() {
    return this.state.formData;
  },

  saveUpdatedState:function(index, textInput, dynoText, frequencyText, dueText) {
    var newIndex = index;
    var newTextInput = textInput;
    var newDynoText = dynoText;
    var newFrequencyText = frequencyText;
    var newDueText = dueText;
    var formData = this.state.formData;
    formData.map((currentForm, formIndex) => {
      if(currentForm.index == newIndex) {
        var currentFormIndex = this.state.formData.indexOf(currentForm);
        var removeFormFromState = formData.slice(0, currentFormIndex);
        this.setState({formData:
          formData[currentFormIndex].textInput = newTextInput

        });
        var newForm = update(removeFormFromState,
            {$unshift: [{
              inputText: newTextInput,
              dynoText: newDynoText,
              frequencyText: newFrequencyText,
              dueText: newDueText,
              index: newIndex
            }]});
        this.setState({formData: newForm});
      }
    });
    this.cancelEditing();
  },

  showForms:function(inputText, dynoText, frequencyText, dueText, index) {
    var editing = this.state.editing;
    if(editing) {
      return (
          <EnabledForm
           placeholderText = {inputText}
           dynoText = {dynoText}
           frequencyText = {frequencyText}
           dueText = {dueText}
           index = {this.state.index}
           saveUpdatedState = {this.saveUpdatedState}
           removeEnabledForm={this.removeForm}
          />
      )
    }
    else {
      return (
          <DisabledForm
           placeholderText = {inputText}
           dynoText = {dynoText}
           frequencyText = {frequencyText}
           dueText = {dueText}
           index = {this.state.index}
           enableEditing = {this.enableEditing}
           removeDisabledForm={this.removeForm}
          />
      )
    }
  },

  removeForm:function(index) {
    var formData = this.state.formData;
    formData.map((currentForm) => {
      if(currentForm.index == index) {
        var indexOfCurrentForm = this.state.formData.indexOf(currentForm);
        var removeFromState = this.state.formData.splice(0, indexOfCurrentForm);
        this.setState({formData: removeFromState});
      }
    })
  },

  renderAddNewJob:function() {
    var editing = this.state.editing;
    if(this.state.clicked) {
      return (
        <ShowForm passPropsToState = {this.passPropsToState} />
      )
    }
    else if (!editing && !this.state.clicked) {
      return (
        <AddJob setClickedState = {this.setClickedState} />
      )
    }
  },

  showEditButton:function() {
    var cancelEditing = this.state.cancelEditing;
    var editing = this.state.editing;

    if(!editing && this.state.formData.length > 0) {
      return (
        <div className="btn-group" role="group">
          <button className="btn btn-primary" onClick={this.enableEditing}> Edit </button>
        </div>
      )
    }
    else if(cancelEditing && this.state.formData.length > 0) {
      return (
        <div className="btn-group" role="group">
          <button className="btn btn-warning" onClick={this.cancelEditing}> Cancel </button>
        </div>
      )
    }
  },

  cancelEditing:function() {
    this.setState({editing: false})
  },

  render:function() {
    var renderedForms = this.state.formData.map(function(formData, index) {
      return (
        <div key = {index + formData.dueText} className="parent">
          {this.showForms(formData.inputText,
            formData.dynoText,
            formData.frequencyText,
            formData.dueText,
            index
          )}
        </div>
      )
    }.bind(this));
    return (

      <div>
        {renderedForms}
        <div className="btn-group btn-group-justified" role="group" aria-label="...">
          {this.showEditButton()}
       </div>
       {this.renderAddNewJob()}

      </div>
    );
  }
});

ReactDOM.render(<MainForm />, document.getElementById('main'));
