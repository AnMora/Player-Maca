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
											width="30"
											height="30"
											viewBox="0 0 24 24">
											<path d="M4 2v20h-2v-20h2zm18 0l-16 10 16 10v-20z" />
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
											width="30"
											height="30"
											viewBox="0 0 24 24">
											<path d="M3 22v-20l18 10-18 10z" />
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
											width="30"
											height="30"
											viewBox="0 0 24 24">
											<path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z" />
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
											width="30"
											height="30"
											viewBox="0 0 24 24">
											<path d="M19 12l-18 12v-24l18 12zm4-11h-4v22h4v-22z" />
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
