import React from 'react'
import './classes.module.css';
import logoCaps from '../../Photo/logo.svg'
const AppFooter = () => {
    return (
        <div className='Footer-wrapper'>
            <div className='Footer-section'>
                <div className='logo-footer'>
                    <img src={logoCaps} alt='' />
                    <div className='caption'>
                        <h5>CUSTOM CAPS</h5>
                        <p>Магазин кепок</p>
                    </div>
                </div>

            </div>

            <div className='Footer-section'>
                <div className='logo-brand'>
                    <div className='logo linkedin'></div>
                    <div className='logo facebook'></div>
                    <div className='logo twitter'></div>
                </div>
            </div>

        </div>
    )
}

export default AppFooter