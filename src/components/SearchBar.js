import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    }
  }

  onSearchChange = (event) => {
    const searchTerm = event.target.value;
    this.setState({searchTerm});
    this.props.onSearchCallback(searchTerm);
  }

  render() {
    return (
      <section>
        <form  className="search-form">
          <h3>Search for a Pet</h3>

          <label htmlFor="search">Search</label>
          <input name="search" id="search" value={this.state.searchTerm} onChange={this.onSearchChange} />
        </form>


      </section>
    );
  }
};

SearchBar.propTypes = {
  onSearchCallback: PropTypes.func,
};

export default SearchBar;
