import React from "react";
//import { Article } from "react-bootstrap";

//create your first Player
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.audio = null;
		this.state = {
			currentIndex: 1,
			songs: [
				{
					title: "South Park",
					id: "south-park",
					author: "Kyle",
					url:
						"https://assets.breatheco.de/apis/sound/files/cartoons/songs/south-park.mp3"
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

	pause = () => {
		this.audio.pause();
	};

	render() {
		const audioPlayer = (
			<>
				<div className="reproductor">
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
						</div>
						<div className="audioPlayer">
							<div className="info">
								<div className="cont">
									<button
										id="prev"
										className="nave"
										onClick={() =>
											this.play(
												this.state.currentIndex - 1
											)
										}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24">
											<path d="M22 12c0 5.514-4.486 10-10 10s-10-4.486-10-10 4.486-10 10-10 10 4.486 10 10zm-22 0c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm13 0l5-4v8l-5-4zm-5 0l5-4v8l-5-4zm-2 4h2v-8h-2v8z" />
										</svg>
									</button>
									<button
										id="play"
										className="nave"
										ref={element =>
											(this.playButton = element)
										}
										onClick={() =>
											this.play(this.state.currentIndex)
										}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24">
											<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 18v-12l10 6-10 6z" />
										</svg>
									</button>
									<button
										id="pause"
										className="nave"
										ref={element =>
											(this.pauseButton = element)
										}
										onClick={() =>
											this.pause(this.state.currentIndex)
										}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24">
											<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 7h-10v10h10v-10z" />
										</svg>
									</button>
									<button
										id="next"
										className="nave"
										onClick={() =>
											this.play(
												this.state.currentIndex + 1
											)
										}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24">
											<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 16v-8l5 4-5 4zm5 0v-8l5 4-5 4zm7-8h-2v8h2v-8z" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
					<audio ref={element => (this.audio = element)} />
				</div>
			</>
		);
		return <>{audioPlayer}</>;
	}
}
