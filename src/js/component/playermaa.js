import React from "react";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			fetchData: []
		};
	}

	ComponentDidMount() {
		fetch("https://assets.breatheco.de/apis/sound/")
			.then(response => response.json())
			.then(data => {
				this.setState({ fetchData: data });
				//console.log(this.state.fetchData);
			});
	}

	render() {
		return (
			<div className="image-box">
				<h1 className="text-center">Fetching</h1>
				<div>
					{this.state.fetchData.map((song, i) => {
						return (
							<div className="container" key={i}>
								<ul>
									<li>{song.name}</li>
									<li>
										<audio controls>
											<source
												src={
													"https://assets.breatheco.de/apis/sound/songs" +
													song.url
												}
											/>
										</audio>
									</li>
								</ul>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}