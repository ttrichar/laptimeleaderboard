import './App.css';
import { AppBar, Container, Toolbar, Typography, Box} from '@material-ui/core';
import React from "react";
import LapCard from './components/LapCard';

class HomeComponent extends React.Component{
  constructor(){
    super();
    this.state={
      cards: [<LapCard key="original" onComplete={this.handleComplete}/>],
      numCards: 1
    };
    
    this.handleComplete = this.handleComplete.bind(this);
  }
  handleComplete = (renderNewCard) => {
    console.log(this.state.cards.length)
    
      this.setState({numCards: this.state.numCards+1});
      this.setState({ cards: [...this.state.cards, <LapCard key={"cardNum"+this.state.numCards} onComplete={this.handleComplete}/>] })
    
    console.log(this.state.cards.length)
  }
  render() {
    return (
      <div className="App">
        <AppBar position="Static" style={{background:"#1e1e1e"}}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                Lapper.gg
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      
          <Box className="boxbox" sx={{ display: 'flex', alignContent: 'space-between', flexWrap: 'wrap', justifyContent: 'center', padding: '20px'}}>
            {this.state.cards}
          </Box>
     
      </div>
    );
  }
}


export default HomeComponent;
