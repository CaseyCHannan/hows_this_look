import React, { Component } from 'react'

const UserOutfitTile = props => {
return(
    <div>
    <img src={props.photo} />
    <h3> {props.style} </h3>
    </div>
  )
}

export default UserOutfitTile;
