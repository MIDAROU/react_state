import React, { Component } from "react";

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}
	componentDidMount() {
		setInterval(() => {
			this.setState({
				count: this.state.count + 1,
			});
		}, 1000);
		return this.state.count;
	}
	render() {
		return (
			<div>
				<p className="ptag">
					TIME SINCE LAST MOUNT : {this.state.count} seconds
				</p>
				<div className="profile">
					<img src={this.props.imgSrc} alt={this.props.fullName} />
					<h1>
						<span>NAME: </span>
						{this.props.fullName}
					</h1>
					<p>
						<span>BIO: </span>
						{this.props.bio}
					</p>
					<p>
						<span>PROFESSION: </span>
						{this.props.profession}
					</p>
				</div>
			</div>
		);
	}
}

export default Profile;
