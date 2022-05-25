import React, { createContext, Component } from 'react';

// createContext va créer un context qui sera stocké dans ThemeContext
export const ThemeContext = createContext()

// on crée ce component qui comprend les datas que l'on veut partager entre les différents components
class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: { syntax: '#555', ui:'#ddd', bg:'#eee' },
        dark: { syntax:'#ddd', ui:'#333', bg:'#555' }
     }
    //  update contxt data
     toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme})
     }
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
            {/* pour Navbar et Booklist(childen) accéde au props du component qui mles enveloppe */}
                { this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;
