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
    };
    this.getLapData = this.getLapData.bind(this);

  }


  async getLapData(key) {
    axios
        .get(
        'https://my-json-server.typicode.com/JackPenhale/mockJson/posts',
            {headers: {"Access-Control-Allow-Origin": "true"}}, {mode:'cors'}
        )
        .then(response => {
            this.Lap.LapTime = response.data[0].SensorReadings_LastLapTime;
            this.Lap.Lap = response.data[0].SensorReadings_Lap;
            this.Lap.RaceCode = response.data[0].SensorReadings_RaceCode;
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        })
        .catch(function(error) {
            console.log(error);
        });
        this.PreviousLaps.push(this.Lap)
  }

  render(){
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
              <TableCell align="right">55.681404</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default LapTable;
