import React, { Component } from 'react';
import './App.css';
import Developer_Logo from "./images/Developer.png";
import Support from "./images/support.png"
import Alert from "./images/alert.png"
import Promotion from "./images/promotion.png"
import Payment from "./images/payment.png"
import Direction from "./images/map.png"
import Music from "./images/music.png"
import Setting from "./images/setting.jpg"
import Switch from 'react-switch'
import { Input } from 'reactstrap';



const textSwitch = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  fontSize: 15,
  color: '#fff',
  paddingRight: 2
}

class Magic extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      message: '',
      limitLeft: 500
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }
  handleChange1(checked1) {
    this.setState({ checked1 });
  }
  handleChange2(checked2) {
    this.setState({ checked2 });
  }
  handleChange3(checked3) {
    this.setState({ checked3 });
  }

  handleWordCount = (event) => {
    let value = (event.target.value)
    console.log(value.length)
    this.setState({
      message: value,
      limitLeft: 500 - value.length
    });
  }

  handleGameClik() {
    this.setState({ disabled: !this.state.disabled })
  }

  render() {
    return (
      <section className="container">
        <div className="left-half">
          <div className="wrapper">
            <article className="arranging">
              <div className=" box1">
                <a className="fa picture">
                  <img className="resize" src={Setting} />
                  <h3>General Settings   </h3>
                </a>
              </div>
              <div className="box1">
                <a className="fa picture">
                  <img className="resize" src={Promotion} />
                  <h3>Promotion Banners  </h3>
                </a>
              </div>
            </article>


            <article className="arranging">
              <div className="box1">
                <a className="fa picture">
                  <img className="resize" src={Alert} />
                  <h3>Alert Notification </h3>
                </a>
              </div>
              <div className="box1">
                <a className="fa picture">
                  <img className="resize" src={Support} />
                  <h3>Support Settings   </h3>
                </a>
              </div>
            </article>


            <article className="arranging">
              <div className="box1">
                <a className="fa picture">
                  <img className="resize" src={Payment} />
                  <h3>Payment Settings   </h3>
                </a>
              </div>
              <div className="box1">
                <a className="fa picture">
                  <img className="resize" src={Direction} />
                  <h3>Map Settings       </h3>
                </a>
              </div>
            </article>

            <article className="arranging">
              <div className="additional-box1">
                <a className="fa picture">
                  <img className="resize" src={Music} />
                  <h3>Music Settings     </h3>

                </a>
              </div>

            </article>
          </div>
        </div>

        <div className="right-half">
          <article>
            <div className="outlayer">
              <div className="wrapper0">
                <h2>Chat Configuration</h2>
                <span className="mbsc-desc">Change your chat preference </span>
                <Switch
                  className="react-switch"
                  onChange={this.handleChange}
                  checked={this.state.checked}
                  checkedIcon={
                    <div style={textSwitch}>on</div>
                  }
                  uncheckedIcon={
                    <div style={textSwitch}>off</div>
                  }
                />
              </div>

              <div className="wrapper1">
                <h2>Accept Chat From Customers</h2>
                <span className="mbsc-desc">Turn on to allow Customers to start a chat with you via Dashboard / Mobile</span>
                <Switch
                  className="react-switch"
                  onChange={this.handleChange1}
                  checked={this.state.checked1}
                  checkedIcon={
                    <div style={textSwitch}>on</div>
                  }
                  uncheckedIcon={
                    <div style={textSwitch}>off</div>
                  }
                />

                <h2>Send Auto-Reply in Chat</h2>
                <span className="mbsc-desc">Enable to send self-defined reply message to Customers when they chat with you.</span>


                <Switch
                  className="react-switch"
                  onChange={this.handleChange2}
                  checked={this.state.checked2}
                  checkedIcon={
                    <div style={textSwitch}>on</div>
                  }
                  uncheckedIcon={
                    <div style={textSwitch}>off</div>
                  }
                />

                <Input type='textarea' maxLength="500" rows="7" cols="80" id="comment" placeholder="Text Your Message Here ..." onChange={this.handleWordCount} value={this.state.message}></Input>
                <br></br>
                <span className="mbsc-desc">You can put greetings, policies, promotions or any other information you wish to <br></br>let your customers know in the message, limit to {this.state.limitLeft < 1 ?
                  <span>{this.state.limitLeft} character left</span>
                  :
                  <span>{this.state.limitLeft} characters left</span>
                }</span>
                <br></br>
                <button className="button"> Save</button>




                <h2>Choose When You Chat</h2>
                <span className="mbsc-desc">Set the Times and Days When you appear online to chat</span>
                <Switch
                  className="react-switch"
                  onChange={this.handleChange3}
                  checked={this.state.checked3}
                  checkedIcon={
                    <div style={textSwitch}>on</div>
                  }
                  uncheckedIcon={
                    <div style={textSwitch}>off</div>
                  }
                />



                <div className="custom-control custom-checkbox" />
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" for="customCheck1">Enable Chat for all days (24*7)</label>

                <p className="or">(or)</p>

                <div className="custom-control custom-checkbox" />
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <a className="spacing1"><label className="Mon">Monday </label></a><a className="outer-boarder">05:30:00</a>-<a className="outer-boarder">18:30:00</a>

                <br></br>

                <div className="custom-control custom-checkbox" />
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <a className="spacing1"><label className="Tue">Tuesday </label></a><a className="outer-boarder">05:30:00</a>-<a className="outer-boarder">18:30:00</a>

                <br></br>

                <div className="custom-control custom-checkbox" />
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <a className="spacing2"><label className="Wed">Wednesday </label></a><a className="outer-boarder">05:30:00</a>-<a className="outer-boarder">18:30:00</a>

                <br></br>

                <div className="custom-control custom-checkbox" />
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <a className="spacing3"><label className="Thurs">Thursday </label></a><a className="outer-boarder">05:30:00</a>-<a className="outer-boarder">18:30:00</a>

                <br></br>

                <div className="custom-control custom-checkbox" />
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <a className="spacing4"><label className="Fri">Friday </label></a><a className="outer-boarder">05:30:00</a>-<a className="outer-boarder">18:30:00</a>

                <br></br>

                <div className="custom-control custom-checkbox" />
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <a className="spacing4"><label className="Sat">Saturday </label></a><a className="outer-boarder">05:30:00</a>-<a className="outer-boarder">18:30:00</a>

                <br></br>

                <div className="custom-control custom-checkbox" />
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <a className="spacing4"><label className="Sun">Sunday </label></a><a className="outer-boarder">05:30:00</a>-<a className="outer-boarder">18:30:00</a>

                <br></br>
              </div>
            </div>
          </article>
        </div>


      </section >
    );
  }
}

export default Magic;
