import React from 'react';
import EpisodeForm from "./EpisodeForm";
import LogoModal from "./LogoModal";

class EpisodeAdd extends React.Component {

  constructor() {
    super();
    this.handleFormChange = this.handleFormChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      episodeTemp: {},
      logo: "3e21c905-7b9c-4ab5-995f-9232defc4952",
    };
  }

  handleFormChange(event, score) {
    if (score !== undefined) {
      this.setState(prevState => ({
        episodeTemp: {
          ...prevState.episodeTemp,
          score
        }
      }));
    } else {
      const {name, value} = event.target;
      if (name === 'score') {
        this.setState(prevState => ({
          episodeTemp: {
            ...prevState.episodeTemp,
            [name]: Number(value)
          }
        }));
      } else {
        this.setState(prevState => ({
          episodeTemp: {
            ...prevState.episodeTemp,
            [name]: value
          }
        }));
      }
    }
  }

  submitForm() {
    this.props.submitForm(this.state.episodeTemp.name, this.state.episodeTemp.code, this.state.logo, this.state.episodeTemp.synopsis, this.state.episodeTemp.score);
    this.setState({ episodeTemp: { name: '', code: '', synopsis: '', score: undefined } });
  }

  render() {
    return (
      <div>
        <h4>Ajouter un épisode :</h4>
        <hr/>
        <EpisodeForm name={this.state.episodeTemp.name} code={this.state.episodeTemp.code} synopsis={this.state.episodeTemp.synopsis} score={this.state.episodeTemp.score} handleFormChange={this.handleFormChange}/>
        <div className="form-group">
          <button type="submit" className="btn btn-block btn-outline-success" onClick={this.submitForm}>Ajouter cet épisode</button>
        </div>
        <LogoModal/>
      </div>
    );
  }
}

export default EpisodeAdd;
