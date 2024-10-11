import React from 'react'
import './Header.css'
import { data } from '../data';
import { categories } from '../Categories';
function Header() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="its logo" />
            </div>
            <div className='listitems'>
                <ul>
                    
                     
                     <li>{categories[0]}</li>
                     <li>{categories[1]}</li>
                     <li>{categories[2]}</li>
                     <li>{categories[3]}</li>
                     <li>{categories[4]}</li>
                  

                        
                    
                </ul>
            </div>
        </div>

    )
} export default Header;