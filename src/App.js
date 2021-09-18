import React , {Component} from 'react';
import Booklist from './components/Booklist';
import Navbar from './components/navbar';
import ThemeContextProvider from './contexts/ThemeContest';


class App extends Component {
  render(){
    return(
     <div className="App">
       <ThemeContextProvider>
          <Navbar />
          <Booklist />
       </ThemeContextProvider>
     </div>
    );
  }
}



export default App;
