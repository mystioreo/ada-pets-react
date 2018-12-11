import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }

  onSelectPet = (petId) => {
    const pet = this.state.petList.find( (pet) => { return pet.id === petId });
    // const pet = this.state.petList.find( (pet) => pet.id === petId);
    this.setState({
      currentPet: pet,
    })
  }

  onRemovePet = (petId) => {
    let newPetList = this.state.petList;

    const pet = newPetList.find( (pet) => pet.id === petId);
    newPetList.splice(newPetList.indexOf(pet), 1);

    this.setState({
      petList: newPetList,
    })
  }

  addPet = (newPet) => {
    
    let newPetList = this.state.petList;

    const lastIndex = newPetList[newPetList.length - 1].id;

    newPet.id = lastIndex + 1;

    newPetList.push(newPet);


    this.setState({
      petList: newPetList,
    })

  }

  render() {
    const { currentPet } = this.state;

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>
          { /* Wave 2:  Where Pet Details should appear */ }
          {this.state.currentPet ? <PetDetails currentPet={currentPet}/> : "" }

        <section className="pet-list-wrapper">
          { /* Wave 1:  Where PetList should appear */ }
          <PetList
            pets={this.state.petList}
            onSelectPetCallback={this.onSelectPet}
            onRemovePetCallback={this.onRemovePet}
          />
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */ }
          <NewPetForm addPetCallback={this.addPet} />
        </section>
      </main>
    );
  }
}

export default App;
