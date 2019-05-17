import React, { Component } from 'react'
import UserOutfitTile from '../components/UserOutfitTile'
import { Link } from 'react-router'

class UsersShowContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      first_name: "",
      last_name: "",
      outfits: [],
      user: {}
    }
 }

    componentDidMount() {
      let userId = this.props.params.id
      fetch(`/api/v1/users/${userId}`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status}(${response.statusText})` ,
          error = new Error(errorMessage)
          throw(error)
        }
        })
      .then(response => response.json())
      .then(body => {
        this.setState({user: body.user, outfits: body.outfits})


      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    render() {
      debugger
    let thisUsersOutfits = this.state.outfits.map(outfit => {
       return(
         <div className="row">
         <UserOutfitTile
           key={outfit.id}
           photo={outfit.photo.url}
           style={outfit.style}
           description={outfit.description}
          />
          </div>
       )

    })
    // <Link to={`/users/${this.props.params.id}/outfits/new`} ><button id='new-review-button' >Add a new outfit for your friends to see!</button></Link>


return (
  <div>
    <div id='button-div'>
    <a href={`/users/${this.props.params.id}/outfits/new`} ><button id='new-review-button' >Add a new outfit for your friends to see!</button></a>
        <h2>
         Welcome back {this.state.user.email}!
        </h2>
        <h4> Your outfits! </h4>

        {thisUsersOutfits}
        </div>
      </div>

    )
    }

  }

  export default UsersShowContainer
