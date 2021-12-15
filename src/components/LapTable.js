import '../App.css';
import axios from 'axios';
import {Paper, Table, TableContainer, TableHead, TableRow, TableBody, TableCell} from '@material-ui/core';
import React from "react";

// type LapProps = {
//     LapNumber: number
//     LapTime: string
//     PreviousLaps: number[][]
// }

// type Lap = {
//     LapNumber: number
//     Time: string
// }



class LapTable extends React.Component{
  constructor(props){
    super(props);
    this.state={
        PreviousLaps: [],
        fastest: 100000
    };
    this.getLapData = this.getLapData.bind(this);
    this.getRndInteger = this.getRndInteger.bind(this);
    this.isfaster = this.isfaster.bind(this);
   

  }
  
  isfaster(newLap){
    if(newLap < this.state.fastest){
      this.setState({fastest: newLap});
    }
  }
  async getLapData(key) {
    axios
        .get(
        'https://my-json-server.typicode.com/JackPenhale/mockJson/posts',
            {headers: {"Access-Control-Allow-Origin": "true"}}, {mode:'cors'}
        )
        .then(response => {
            console.log("here we are with this key "+key)
            console.log(response);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            
        })
        .catch(function(error) {
            console.log(error);
        });
        
  }

  getRndInteger(min, max) {
    var rand = Math.random()*(max-min) + min;
    var power = Math.pow(10, 3);
    return Math.floor(rand*power) / power;
  }

  render(){
    let mockLaps = [{lap:1, laptime: this.getRndInteger(50,60)}, {lap:2, laptime: this.getRndInteger(50,60)}, {lap:3, laptime: this.getRndInteger(50,60)}, {lap:4, laptime: this.getRndInteger(50,60)} ,{lap:5, laptime: this.getRndInteger(50,60)}];
    this.getLapData(this.props.apikey)
    console.log(this.state.PreviousLaps)
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
                <TableCell align="center" colSpan={3}>
                <h3>{this.props.name}</h3>
                <p>{this.state.fastest}</p>
                </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right"><p>Lap</p></TableCell>
              <TableCell align="right"><p>Lap Time</p></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {mockLaps.map((row) => (
                        <TableRow key={row.lap}>
                            <TableCell align="right">
                                {row.lap}
                            </TableCell>
                            <TableCell align="right">{row.laptime} {this.isfaster(row.laptime)}</TableCell>
                        </TableRow>
                    ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default LapTable;
