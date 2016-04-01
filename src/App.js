import React from 'react';
import { Link } from 'react-router';
import jQuery from 'jquery';
import MusicPlayer from './Music-player';
import './stylesheets/components.scss';
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import SoundCloudAudio from 'soundcloud-audio';
const {
    SoundCloudLogoSVG,
    PlayIconSVG,
    PauseIconSVG,
    NextIconSVG,
    PrevIconSVG
} = Icons;
const clientId = 'd47f81af8d5685d61f323bb6a2c5e81c';
const resolveUrl = 'https://soundcloud.com/stepan-i-meduza-official/dolgo-obyasnyat';
class CustomPlayer extends React.Component {
    play() {
        let { soundCloudAudio, playing } = this.props;
        if (playing) {
            soundCloudAudio.pause();
        } else {
            soundCloudAudio.play();
        }
    }

    render() {
        let { track, playing } = this.props;

        if (!track) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{track.title}</h2>
                <h3>{track.user.username}</h3>
                <button onClick={this.play.bind(this)}>
                    {playing ? 'Pause' : 'Play'}
                </button>
            </div>
        );
    }
}

class App extends React.Component {
  constructor(){
    super();
  }

playSong() {
  console.log("test")
};
  render() {
    return (
      <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand" href="#">Ownify</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          </div>
        </div>
      </nav>
        <div className="jumbotron">
          <div className="container">
            <h1>Spotify is to expensive just<br></br> login and create your own!</h1>
          </div>
        </div>
          <div className="container">
            <h1>Spotlight</h1>
            <div className="row">
              <div className="col-md-3">
                <div className="panel panel-default">
                    <div className="panel-body music1">
                    <SoundPlayerContainer resolveUrl={resolveUrl} clientId={clientId}>
                        <CustomPlayer />
                    </SoundPlayerContainer>
                    </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                      <img src="http://1.bp.blogspot.com/-WyfkhMYPXO0/Ud25_Exg6DI/AAAAAAAASVQ/oVuASmn1p7Q/s1600/the-beatles-abbey-road-album-cover.jpg" className="img-responsive"></img>
                    </div>
                    <div className="panel-body">
                      The Beatles
                    </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                      <img src="http://1.bp.blogspot.com/-WyfkhMYPXO0/Ud25_Exg6DI/AAAAAAAASVQ/oVuASmn1p7Q/s1600/the-beatles-abbey-road-album-cover.jpg" className="img-responsive"></img>
                    </div>
                    <div className="panel-body">
                      The Beatles
                    </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                      <img src="http://1.bp.blogspot.com/-WyfkhMYPXO0/Ud25_Exg6DI/AAAAAAAASVQ/oVuASmn1p7Q/s1600/the-beatles-abbey-road-album-cover.jpg" className="img-responsive"></img>
                    </div>
                    <div className="panel-body">
                      The Beatles
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                    <h1>What is Ownify</h1>
                    <p>blablablablalblablalblablalblablalblablal</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-4 text-center">
                  <img src="http://1.bp.blogspot.com/-WyfkhMYPXO0/Ud25_Exg6DI/AAAAAAAASVQ/oVuASmn1p7Q/s1600/the-beatles-abbey-road-album-cover.jpg" className="img-responsive img-circle"></img>
                    <p>blablablablalblablalblablalblablalblablal</p>
                  </div>
                  <div className="col-md-4 text-center">
                  <img src="http://1.bp.blogspot.com/-WyfkhMYPXO0/Ud25_Exg6DI/AAAAAAAASVQ/oVuASmn1p7Q/s1600/the-beatles-abbey-road-album-cover.jpg" className="img-responsive img-circle"></img>
                    <p>blablablablalblablalblablalblablalblablal</p>
                  </div>
                  <div className="col-md-4 text-center">
                  <img src="http://1.bp.blogspot.com/-WyfkhMYPXO0/Ud25_Exg6DI/AAAAAAAASVQ/oVuASmn1p7Q/s1600/the-beatles-abbey-road-album-cover.jpg" className="img-responsive img-circle"></img>
                    <p>blablablablalblablalblablalblablalblablal</p>
                  </div>
              </div>
          </div>
      </div>
      );
  }
}

export default App;
