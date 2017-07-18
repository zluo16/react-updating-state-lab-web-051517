import React, {Component} from 'react'

class YouTubeDebugger extends Component {
  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  bitrateClicker = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolutionClicker = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.settings.bitrate}</p>
        <p>{this.state.settings.video.resolution}</p>
        <button onClick={this.bitrateClicker}>Change Bitrate</button>
        <button onClick={this.resolutionClicker}>Change Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger
