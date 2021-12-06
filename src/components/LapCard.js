import '../App.css';
import {Card, Button, TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React from "react";
import LapTable from './LapTable';



class LapCard extends React.Component{
  constructor(props){
    super(props);
    this.state={
        cardOpen: false,
        username: '',
        key: '',
        connected: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openLapCard = this.openLapCard.bind(this);
  }

  handleNameChange(event) {
    this.setState({username: event.target.value});
  }
  handleKeyChange(event) {
    this.setState({key: event.target.value});
  }
  handleSubmit(event) {
    this.setState({connected: true})
    this.props.onComplete(true)
    event.preventDefault();
  }

  openLapCard() {
    this.setState({cardOpen: true});
  }
  render(){

    let card;
    if (this.state.cardOpen && !this.state.connected) {
      card = 
      <div className="cardField">
        <form onSubmit={this.handleSubmit} style={{color:"white"}}>
            <TextField  
                id="outlined-helperText"
                label="username"
                onChange={this.handleNameChange}
                required
                margin="normal"

                >
            </TextField>
            <br/>
            <TextField
                id="outlined-helperText"
                label="API Key"
                onChange={this.handleKeyChange}
                required
                margin="normal"
                >
            </TextField>
            <br/>
            <Button
            className="cardField"
            type="submit"
            variant="contained"
            color="primary"
            sx={{
                padding: 10
            }}
          >
            Connect
          </Button>
        </form>
      </div>;
    } else if(!this.state.cardOpen) {
      card = 
      <Button onClick={this.openLapCard}>
        <AddCircleIcon className="addCircle"></AddCircleIcon>
      </Button>;
    } else {
        card =
        <LapTable
            key={this.state.key}
            name={this.state.username} />
   
  
    }
    return (

        <div className="card-container">
          <Card  className="addCard">
            {card}
          </Card>
        </div>

    );
  }
}

export default LapCard;
