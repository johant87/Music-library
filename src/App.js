import React from 'react';
import { Link } from 'react-router';
import jQuery from 'jquery';
import MusicPlayer from './Music-player';
import './stylesheets/components.scss';


class App extends React.Component {
  constructor(){
    super();
  }

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
            <h1>When spotify is to expensive</h1>
            <p>Login and create your own!</p>
          </div>
        </div>
          <div className="container">
            <h1>Spotlight</h1>
            <div className="row">
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
            <div className="row">
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
          <MusicPlayer />
      </div>
      );
  }
}

export default App;
