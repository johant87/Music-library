import React from 'react';
import { Link } from 'react-router';
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import SoundCloudAudio from 'soundcloud-audio';

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


class MusicPlayer extends React.Component {
      render() {
          return (
              <SoundPlayerContainer resolveUrl={resolveUrl} clientId={clientId}>
                  <CustomPlayer />
              </SoundPlayerContainer>
          );
      }
}


export default MusicPlayer;
