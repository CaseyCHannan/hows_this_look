import React, { Component } from 'react'

const UserOutfitTile = props => {
return(
  <div className="user-outfit-show-container">
    <div className="user-outfit-show-left">
      <img src={props.photo} className="user-outfit-show-photo" />
    </div>
    <div className="user-outfit-show-right">
      <h3> {props.style} </h3>
      <h3> {props.description}</h3>
    </div>
  </div>
  )
}

export default UserOutfitTile;
