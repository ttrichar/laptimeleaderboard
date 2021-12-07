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
        PreviousLaps: []
    };
    this.getLapData = this.getLapData.bind(this);
    this.getRndInteger = this.getRndInteger.bind(this);
    let mockLaps = [{lap:1, laptime: this.getRndInteger(50,60)}, {lap:2, laptime: this.getRndInteger(50,60)}, {lap:3, laptime: this.getRndInteger(50,60)}, {lap:4, laptime: this.getRndInteger(50,60)} ,{lap:5, laptime: this.getRndInteger(50,60)}];

  }


  async getLapData(key) {
    let Lap;
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
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  render(){
    this.getLapData(this.props.apikey)
    console.log(this.state.PreviousLaps)
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
                <TableCell align="center" colSpan={3}>
                <h3>{this.props.name}</h3>
                </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right"><p>Lap</p></TableCell>
              <TableCell align="right"><p>Lap Time</p></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">{this.mockLaps.laptime}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">2</TableCell>
              <TableCell align="right">{this.getRndInteger(50,60)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">3</TableCell>
              <TableCell align="right">{this.getRndInteger(50,60)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default LapTable;
