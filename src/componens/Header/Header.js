import React from 'react'
import './Header.css'
import logo from '../../photo/logo.svg'
import logo__basket from '../../photo/logo__basket.svg'

const AppHeader = () => {
    return (
        <div>
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
                        <input type='text' className=' search logo__loupe'/>
                    </form>
                </div>
                <div className='header__item'>
                    <a href='https://google.com' className="logo__basket" >
                        <img src={logo__basket} alt=''  /></a>
                </div>
            </div>
        </div>
                <div className="menu">
                    <a href="/">Home</a>
                    <a href="/catalog">Catalog</a>
                    <a href="/details" className="Link">Детали продукта</a>
                </div>
        </div>



    )
}
export default AppHeader
