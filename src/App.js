import { Component } from "react";
import img from "./images/IMG_0713(1).jpg";
import Profile from "./Profile";
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
		};
	}
	toggleShow = () => this.setState({ isShow: !this.state.isShow });
	render() {
		return (
			<div className="Header">
				<button className="button-53" onClick={this.toggleShow}>
					{this.state.isShow ? "HIDE" : "SHOW"}
				</button>
				{this.state.isShow ? (
					<Profile
						fullName={this.state.user.fullName}
						bio={this.state.user.bio}
						imgSrc={this.state.user.imgSrc}
						profession={this.state.user.profession}
					/>
				) : (
					<></>
				)}
			</div>
		);
	}
}

export default App;
