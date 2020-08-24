import React, { Component } from 'react';

import "./Contact.css";
import "./Loading.css";

let dootCounter = 0;
setInterval(() => {
  let e = document.getElementsByClassName("splash-loading-box")[0];
  if (e) {
    let eDoot = document.createElement("div");

    if (dootCounter > 14) {
      e.innerHTML = '';
      dootCounter = 0;
    }

    eDoot.classList.add("splash-loading-doot");
    e.appendChild(eDoot);
    dootCounter++;
  }

}, 300);



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
    this.state = {value: ""};
  }

  render() {
    return (
      <label>
        <p>Message</p>
        <div className="input-bg">
          <textarea value={this.state.value} onChange={this.handleChange} placeholder="Type your message here"/>
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
    let root = document.getElementById("root");
    root.classList = "";

    let content = document.getElementsByClassName("content")[0];
    content.classList = "content contact";

    let footer = document.getElementsByTagName("footer")[0];
    footer.classList = "contact";

    this.fuckTheDOM();
    window.onresize = this.fuckTheDOM;
  }

  fuckTheDOM() {
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

  async handleSubmit(e) {
    e.preventDefault();
    const loading = document.getElementsByClassName("loading")[0];
    loading.classList = "loading show";
    this.refs.submit.disabled = true;
    this.refs.submit.value = "Sending...";

    const left = document.getElementsByClassName("contact-column-left")[0];
    const right = document.getElementsByClassName("contact-column-right")[0];
    left.classList = "contact-column-left disable";
    right.classList = "contact-column-right disable";

    const data = {
      subject: this.refs.subject.state.value,
      name: this.refs.name.state.value,
      email: this.refs.email.state.value,
      message: this.refs.message.state.value,
    };

    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(data),
    };

    const sleej = delay => new Promise(resolve => setTimeout(resolve, delay));

    await sleej(1000);
    const response = await fetch("/contact", request);
    if (response.status == 200) {
      this.refs.submit.value = "Sent!";
      this.refs.submit.disabled = false;

      left.classList = "contact-column-left enable";
      right.classList = "contact-column-right enable";
      loading.classList = "loading";
    }
    else {
      const body = await response.json()
      this.refs.submit.value = "Could not send, please try again later"
      this.refs.submit.disabled = false;

      left.classList = "contact-column-left enable";
      right.classList = "contact-column-right enable";
      loading.classList = "loading";
    }
  }

  render() {
    return (
      <form className="contact-contain" onSubmit={this.handleSubmit}>
        <div className="loading">
          <div className="splash-loading-text">
            SENDING
          </div>
          <div className="splash-loading-box-container">
            <div className="splash-loading-box"/>
          </div>
        </div>
        <div className="contact-column-left">
          <SelectFormInput ref="subject" name="subject"/>
          <TextFormInput ref="name" name="name"/>
          <TextFormInput ref="email" name="email"/>
          <div className="input-bg">
            <input ref="submit" id="submit" type="submit" value="Submit"/>
          </div>
        </div>
        <div className="contact-column-right">
          <MessageFormInput ref="message" name="message"/>
        </div>
      </form>
    )
  }

  componentWillUnmount() {
    window.onresize = null;
  }
}

export default Contact;
