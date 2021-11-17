import { Component } from "react";
import img from "./images/IMG_0713(1).jpg";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        fullName: "Mahdi Ben Mhenni",
        bio: "Hello i am Mahdi!",
        imgSrc: img,
        profession: "Web Developer",
      },
      isShow: false,
      count: 0,
    };
  }
  toggleShow = () => this.setState({ isShow: !this.state.isShow });
  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
    return this.state.count;
  }
  componentWillUnmount() {
    clearInterval(this.state.count);
  }
  render() {
    return (
      <div className="Header">
        <p className="ptag">
          TIMER SINCE LAST MOUNT : {this.state.count} seconds
        </p>
        <button className="button-53" onClick={this.toggleShow}>
          {this.state.isShow ? "HIDE" : "SHOW"}
        </button>
        {this.state.isShow ? (
          <div className="profile">
            <h1>
              <span>NAME: </span>
              {this.state.user.fullName}
            </h1>
            <p>
              <span>BIO: </span>
              {this.state.user.bio}
            </p>
            <p>
              <span>PROFESSION: </span>
              {this.state.user.profession}
            </p>
            <img src={this.state.user.imgSrc} alt={this.state.user.fullName} />
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default App;
