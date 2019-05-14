import React, { Component } from 'react'

class OutfitsShowContainer extends Component {

  constructor(props){
      super(props)
        this.state = {
           description: "",
           photo: "",
           style: "",
           user_id: 0
          //

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
         description: body.outfit.description,
         photo: body.outfit.photo.url,
         style: body.outfit.style,
         user_id: body.user_id
      })
    })
  }


  render() {

  return (
    <div>
    {this.state.description}
    <img src={this.state.photo.url}/>
    </div>
  )
  }

}

export default OutfitsShowContainer
