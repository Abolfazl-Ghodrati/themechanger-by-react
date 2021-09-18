import React, { Component ,createContext } from 'react';

const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme : true ,light: {
            text : '#555',
            bg : '#eee',
            ui : '#ddd'
        }, dark : {
            text : '#ddd' ,
            bg : '#555',
            ui : '#333'
        }
    }
    render() { 
        return (
            <ThemeContext.provider value={{...this.state}}>
              {this.props.children}
            </ThemeContext.provider>
        );
    }
}
 
export default ThemeContextProvider;

