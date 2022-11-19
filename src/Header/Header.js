import css from './Header.module.css';
import imgClos from './../../src/image/burger_close.png'
import imgOpen from './../../src/image/burger_open.png'
import logo from './../../src/image/logo.png'
import { useState } from 'react';
import Modal from '../Modal/Modal';

function Header() {

    const [open, setOpen] = useState(true)


    return(
        <div className={css.contenerHeader}>
            {
                open &&  <Modal /> 
            }
            
            <div className={css.menuBlock} onClick={() => setOpen(!open)}> 
                <div className={css.menuText} >
                    Menu
                </div >
                <div className={css.imgPosition}>
                    <img src={imgOpen} alt="clos" className={`${css.open } ${open ? css.showOpen : ""}`} /> 
                    <img src={imgClos} alt="clos" className={`${css.clos } ${open ? css.showClos : ""}`}  />
                </div>
            </div>
            <div className={css.logoBlock}> 
                <img src={logo} alt='logo' />
            </div>
            <div className={css.buttonBlock}> 
                <button className={css.but}>Забронировать</button>
            </div>
        </div>
    )
}

export default Header;