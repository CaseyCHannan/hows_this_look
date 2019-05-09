import React, { Component } from 'react'

class OutfitsShowContainer extends Component {


  constructor(props){
      super(props)
        this.state = {
          description: "",
          photo: "",
          style: "",
          user_id: 0


        }
  }

  componentDidMount(){
    fetch(`/api/v1/outfits/${this.props.params.id}`,{ credentials: 'same-origin' })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status}(${response.statusText})` ,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        description: body.description,
        photo: body.photo,
        style: body.style,
        user_id: body.user_id
      })
    })
  }


  render() {

  return (
    <div>
    {this.state.description}
    <img src={this.state.photo}/>
    </div>
  )
  }

}

export default OutfitsShowContainer
