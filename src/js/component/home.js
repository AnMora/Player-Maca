import React from "react";

//create your first Player
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.audio = null;
		this.state = {
			currentIndex: 1,
			clicked: false,
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

	changeTrack(i) {
		this.setState({ currentIndex: i });
		this.audio.current.pause();
		this.audio.current.load();
		this.audio.currentIndex.play();
	}

	play = i => {
		let url = this.state.songs[i].url;
		const songUrl = "https://assets.breatheco.de/apis/sound/" + url;
		this.audio.src = songUrl;
		this.audio.play();
		this.setState({ currentIndex: i });
	};

	render() {
		const audioPlayer = (
			<>
				<div id="player">
					<img src="" className="cover" id="art" />
					<div className="trackinfo">
						{this.state.songs.map((song, index) => {
							return (
								<p
									id="title"
									key={index}
									onClick={() =>
										this.play(this.state.currentIndex)
									}>
									{song.name}
								</p>
							);
						})}
						;
					</div>
					<div className="container audioPlayer">
						<div className="info">
							<div className="cont">
								<button
									id="play"
									className="nav"
									ref={element => (this.playButton = element)}
									onClick={() =>
										this.play(this.state.currentIndex)
									}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24">
										<path d="M3 22v-20l18 10-18 10z" />
									</svg>
								</button>
								<button
									id="prev"
									className="nav"
									onClick={() =>
										this.play(this.state.currentIndex - 1)
									}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24">
										<path d="M4 2v20h-2v-20h2zm18 0l-16 10 16 10v-20z" />
									</svg>
								</button>

								<button
									id="play"
									className="nav"
									ref={element =>
										(this.pauseButton = element)
									}
									onClick={() =>
										this.pause(this.state.currentIndex)
									}>
									<img src="http://abarcarodriguez.com/lab/pause.png" />
								</button>
								<button
									id="next"
									className="nav"
									onClick={() =>
										this.play(this.state.currentIndex + 1)
									}>
									<img src="http://abarcarodriguez.com/lab/next.png" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
		return <>{audioPlayer}</>;
	}
}
