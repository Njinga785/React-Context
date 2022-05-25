import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class Booklist extends Component {
     static contextType = ThemeContext  
    render() { 
        const { isLightTheme, light, dark } = this.context
        const theme =  isLightTheme ? light : dark
        return (
            
            <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
                <ul>
                    <li style={{ background: theme.ui}}>la nuit du sang froid</li>
                    <li style={{ background: theme.ui}}>les prisonniers du temps</li>
                    <li style={{ background: theme.ui}}>la route du desert</li>
                </ul>
            </div>
        );
    }
}
 
export default Booklist;