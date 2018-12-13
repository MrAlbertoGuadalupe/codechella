import React from 'react';
import './VendorList.css';

export default function Vendor(props) {
  return (
    <div id={props.vendor.name} className="Vendor">
      <img onClick={props.onChange} alt={props.vendor.name} src={props.vendor.img_url}/>
      <h3 onClick={props.onChange}>{props.vendor.name.toUpperCase()}</h3>
      {props.isFavorite ?
      <span><input className="favebutton" name={props.vendor.id} type="button" value="Remove from Favorites" onClick={props.unfavoriteVendor}/></span> :
      <span><input className="favebutton" name={props.vendor.id} type="button" value="Add to Favorites" onClick={props.favoriteVendor}/></span>}
    </div>
  )
}
