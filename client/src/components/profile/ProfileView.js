import React, { Component } from 'react';
import ArtistMap from './ArtistMap';
import VendorMap from './VendorMap';

export default function ProfileView(props) {

    return (

    <div>
      {props.user.artists.map(artist => {
        return (
          <h3>
          key={artist.id}
          artist={artist.name}
          description={artist.description}
          </h3>
        )
      })}  

    </div>

    )
}
