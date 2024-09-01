import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);
		// this.state = { count: 0, count1: 0 };
		this.state = {
			userInfo: { name: "Dummy", location: "Default", role: "Test" },
		};
		console.log("User Constructor");
	}

	async componentDidMount() {
		/**
		 * This is used to make api call
		 * - Constructor(Dummy)
		 * - Render(Dummy)
		 * - HTML <Dummy />
		 * - Componet Did Mount
		 * - Api Call
		 * - This.setState (Updated with new data) -> State Variable is update with new data
		 * --- Update
		 * - Render (New Api Data)
		 * - <html new api data />
		 * - Component Did Update
		 */
		console.log("User Component Did Mount");
		const data = await fetch("https:/api.github.com/users/sandeepsharma");
		const json = await data.json();
		this.setState({
			userInfo: json,
		});
		console.log(json);

		/**
		 * Component Will Unmount will disable this
		 */
		this.timer = setInterval(() => {
			console.log(
				"ComponentDidMount to show use of ComponentWillUnmount"
			);
		}, 1000);
	}

	componentDidUpdate() {
		console.log("Component Did Update");
	}

	componentWillUnmount() {
		console.log("Component Will Unmound");
		/**
		 * Basically this is used to cleanup for example the setinterval
		 * which is running it is used to cleanup this
		 * Why we need to clean - this will optimize this information
		 */
		clearInterval(this.timer);
	}

	render() {
		// const { NAME, ROLE, LOCATION } = this.props;
		console.log("User Render");
		return (
			<div className="user-card">
				{/* <h1>Count: {this.state.count}</h1>
				<h1>Count1: {this.state.count1}</h1> */}
				<h2>Name: {this.state.userInfo.name}</h2>
				<h3>Role: {this.state.userInfo.role}</h3>
				<h4>Loaction: {this.state.userInfo.location}</h4>
				{/* <button
					onClick={() => {
						this.setState({
							count: this.state.count + 1,
							count1: this.state.count1 + 10,
						});
					}}
				>
					Count Increase
				</button> */}
			</div>
		);
	}
}

export default UserClass;
