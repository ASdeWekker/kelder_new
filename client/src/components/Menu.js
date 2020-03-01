import React, { Component } from "react"
import Penp from "./Penp"

class Menu extends Component {
	constructor(props) {
		super()

		// Just a random version version number I'll sometimes update.
		this.versionNumber = "1.0.34"
	}

	render() {
		return (
			<div className="right-menu">
				<Penp version={this.versionNumber} />
				<p style={{marginLeft: "16px"}}><a href="http://10.8.0.4:3000">Go to the dev version</a></p>
				<h1
					className="right-menu--title"
					onClick={this.props.toggleMenu}
				>Practice <span>&amp;</span> Projects
					<span className="right-menu--title--close-button"><i className="fas fa-times"></i></span>
				</h1>
			</div>
		)
	}
}

export default Menu