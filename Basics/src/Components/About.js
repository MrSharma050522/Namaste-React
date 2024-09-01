import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
	constructor(props) {
		super(props);
		// console.log("About Constructor");
	}

	async componentDidMount() {
		// console.log("About Component Did Mount");
	}

	/**
	 * - Parent Constructor
	 * - Parent Render
	 *      - First Child Constructor
	 *      - First Child Render
	 *
	 *      - Second Child Constructor
	 *      - Second Child Render
	 *
	 *      <DOM UPDATED IN SINGLE BATCH>
	 *      - First Child Component Did Mount
	 *      - Second Child Component Did Mount
	 *
	 * - Parent Component Did Mount
	 */
	render() {
		// console.log("About Render");
		return (
			<div>
				<h1>About Us Page</h1>
				<UserClass
					NAME={"First Child"}
					ROLE={"SDE"}
					LOCATION={"Bangalore"}
				/>
				{/* <UserClass
					NAME={"Second Child"}
					ROLE={"SDE"}
					LOCATION={"Bangalore"}
                    /> */}
				{/* <User /> */}
			</div>
		);
	}
}

// const About = () => {
//     return (
//         <div>
//             <h1>About Us Page</h1>
//             {/* <User NAME={"Sandeep Sharma (function)"} ROLE={"SDE"} LOCATION={"Bangalore"}/> */}
//             <UserClass NAME={"Sandeep Sharma (function)"} ROLE={"SDE"} LOCATION={"Bangalore"}/>
//         </div>
//     );
// };

export default About;
