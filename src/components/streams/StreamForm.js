import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const errorClassName = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={errorClassName}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

/**
 * Form validation function
 * @param {*} formValues
 * @returns Object
 */
const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Title cannot be empty";
  }

  if (!formValues.description) {
    errors.description = "Description cannot be empty";
  }

  return errors;
};

export default reduxForm({ form: "streamForm", validate })(StreamForm);
