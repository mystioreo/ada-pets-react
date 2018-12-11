import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      species: "",
      about: "",
      images: [""],
    };
  }

  onIDChangeHandler = (event) => {
    this.setState({
      id: event.target.value,
    })
  }
  onNameChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
    })
  }
  onSpeciesChangeHandler = (event) => {
    this.setState({
      species: event.target.value,
    })
  }
  onAboutChangeHandler = (event) => {
    this.setState({
      about: event.target.value,
    })
  }
  onImageChangeHandler = (event) => {
    const images = this.state.images;
    images[0] = event.target.value;

    this.setState({
      images
    })
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    if (this.state.name && this.state.images[0] && this.state.species) {
      this.props.addPetCallback(this.state);

      this.setState({
        name: "",
        species: "",
        about: "",
        images: [""],
      });
    } else {
      console.log("missing fields");
    }


  }
  render() {
    return (
      <form  className="new-pet-form" onSubmit={this.onSubmitHandler}>
        <h3>Add a Pet</h3>
        { /* A form should go here! */ }

        <label htmlFor="name">Name</label>
        <input name="name" id="name" value={this.state.name} onChange={this.onNameChangeHandler} />

        <label htmlFor="species">Species</label>
        <input name="species" id="species" value={this.state.species} onChange={this.onSpeciesChangeHandler} />

        <label htmlFor="about">About</label>
        <input type="textarea" name="about" id="about" value={this.state.about} onChange={this.onAboutChangeHandler} />

        <label htmlFor="image">Image URL</label>
        <input name="image" id="image" value={this.state.images[0]} onChange={this.onImageChangeHandler} />

        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;
