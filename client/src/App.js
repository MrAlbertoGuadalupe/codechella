import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ArtistView from './components/artistcomponents/ArtistView';
import VendorView from './components/vendorcomponents/VendorView';
import AreaView from './components/areacomponents/AreaView';
import MainList from './components/maincomponents/MainList';
import MapList from './components/mapcomponents/MapList';
import LoginView from './components/logincomponents/LoginView';
import RegisterView from './components/logincomponents/RegisterView';
import Nav from './components/navcomponent/Nav';
import './App.css';
import serv from './services/apiservices.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'mainView',
      artists: '',
      vendors: '',
      areas: ''
    }
    this.getArtists = this.getArtists.bind(this);
    this.getVendors = this.getVendors.bind(this);
    this.getAreas = this.getAreas.bind(this);
  }


  setView = (view) => {
    this.setState({
      screen: view
    });
  }

  componentDidMount = async () => {
    await this.getArtists();
    await this.getVendors();
    await this.getAreas();
  }

  async getArtists() {
    try {
      const artists = await serv.getArtists();
      this.setState({artists});
    } catch (e) {
      console.error(e);
    }
  }

  async getAreas() {
    try {
      const areas = await serv.getAreas();
      this.setState({areas});
    } catch (e) {
      console.error(e);
    }
  }

  async getVendors() {
    try {
      const vendors = await serv.getVendors();
      this.setState({vendors});
    } catch (e) {
      console.error(e);
    }
  }

  async getVendor() {
    try {
      const vendor = await serv.getVendor();
      this.setState(vendor);
    } catch (e) {
      console.error(e);
    }
  }


  render() {
    //switching between views
    

    return (
      <div className="App">
        <h1>Codechella</h1>
        <Nav />


      </div>
    );
  }
}

export default App;
