import React from "react";
import EpisodesList from "./EpisodesList";
import EpisodeForm from "./EpisodeForm";

class Episodes extends React.Component {

  constructor() {
    super();
    this.state = {
      episodes: []
    };
    this.submitForm = this.submitForm.bind(this);
    this.deleteEpisode = this.deleteEpisode.bind(this);
  }

  componentDidMount() {
    fetch('/api/episodes')
      .then(response => response.json())
      .then(data => this.setState({ episodes: data }));
  }

  submitForm(name, code, score) {
    const newEpisode = {
      name: name,
      code: code,
      score: Number(score)
    };

    fetch('/api/episodes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEpisode)
    })
      .then(() => this.setState({ episodes: [...this.state.episodes, newEpisode]}));
  }

  deleteEpisode(id) {
    fetch('/api/episodes/' + id, {
      method: 'DELETE'
    })
      .then(() => this.setState({episodes: this.state.episodes.filter((episode) => episode.id !== id)}));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <EpisodesList episodes={this.state.episodes} deleteEpisode={this.deleteEpisode}/>
          </div>
          <div className="col-3">
            <EpisodeForm submitForm={this.submitForm}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Episodes;