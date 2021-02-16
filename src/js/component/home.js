import React from "react";

//create your first Player
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.audio = null;
		this.state = {
			currenteIndex: 1,
			songs: [
				{
					id: 1,
					category: "game",
					name: "Game Over",
					url: "data/mario/fx_gameover.wav"
				},
				{
					id: 2,
					category: "game",
					name: "Jump Super",
					url: "data/mario/fx_jump_super.wav"
				}
			]
		};
	}

	componentDidMount() {
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(res => res.json())
			.then(songs => this.setState({ songs }));
	}
}
