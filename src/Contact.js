import React, { Component } from 'react';

import "./Contact.css";

class BaseFormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }
}

class TextFormInput extends BaseFormInput {
  render() {
    return(
      <label>
        <p>{ this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1) }</p>
        <div className="input-bg">
          <input type="text" name={this.props.name} value={this.state.value} onChange={this.handleChange}/>
        </div>
      </label>
    )
  }
}

class MessageFormInput extends BaseFormInput {
  constructor(props) {
    super(props);
    this.state = {value: "Type your message here"};
  }

  render() {
    return (
      <label>
        <p>Message</p>
        <div className="input-bg">
          <textarea value={this.state.value} onChange={this.handleChange}/>
        </div>
      </label>
    )
  }
}

class SelectFormInput extends BaseFormInput {
  constructor(props) {
    super(props);
    this.state = {value: "general"};
    this.values = ["general", "demos"];
  }
  
  render() {
    return (
      <label>
        <p>Subject</p>
        <div className="input-bg">
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="general">General Inquiries</option>
            <option value="demos">Demos</option>
          </select>
        </div>
      </label>
    )
  }
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let content = document.getElementsByClassName("content")[0];
    content.classList = "content contact";

    let footer = document.getElementsByTagName("footer")[0];
    footer.classList = "contact";

    this.fuckTheDOM();
    window.onresize = this.fuckTheDOM;
  }

  fuckTheDOM() {
      console.log("yeah");
    let submit = document.getElementById("submit");
    if (!submit) { return; }

    if (window.innerWidth <= 920) {
      let parentSubmit = submit.parentElement;
      let right = document.getElementsByClassName("contact-column-right")[0];
      right.appendChild(parentSubmit);
    }
    else {
      let parentSubmit = submit.parentElement;
      let left = document.getElementsByClassName("contact-column-left")[0];
      left.appendChild(parentSubmit);
    }
  }

  handleSubmit(e) {
    alert("Submit!");
    e.preventDefault();
  }

  render() {
    return (
      <form className="contact-contain" onSubmit={this.handleSubmit}>
        <div className="contact-column-left">
          <SelectFormInput name="subject"/>
          <TextFormInput name="name"/>
          <TextFormInput name="email"/>
          <div className="input-bg">
            <input id="submit" type="submit" value="Submit"/>
          </div>
        </div>
        <div className="contact-column-right">
          <MessageFormInput name="message"/>
        </div>
      </form>
    )
  }

  componentWillUnmount() {
    window.onresize = null;
  }
}

export default Contact;
