import React from 'react'
import './classes.module.css'
import logo from '../../Photo/logo.svg'
import logo__basket from '../../Photo/logo__basket.svg'

const AppHeader = () => {
    return (
        <div className='App-header'>
            <div className='header__section'>
                <div className='header__item header/logo'>
                    <a href='https://google.com'><img src={logo} alt='' /></a>
                </div>
                <span className='header__item '><a href='https://google.com'>Каталог</a></span>
                <span className='header__item '><a href='https://google.com'>Бренды</a></span>
                <span className='header__item '><a href='https://google.com'>О нас</a></span>
            </div>
            <div className='header__section'>
                <div className='header__item'>
                    <form className='header__item input__search'>
                        <input type='text' className='search logo__loupe'/>
                    </form>
                </div>
                <div className='header__item'>
                    <a href='https://google.com' className="logo__basket" ><img src={logo__basket} alt=''  /></a>
                </div>
            </div>

        </div>




    )
}
export default AppHeader
