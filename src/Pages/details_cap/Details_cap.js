import React from 'react'
import './classes.module.css'
import back_cap from '../../Photo/back_cap.png'
import side_cap from '../../Photo/side_cap.png'
import inside_cap from '../../Photo/inside_cap.png'
import white_cap from '../../Photo/white-cap.png'
import red_cap from '../../Photo/red-cap.png'
import blue_cap from '../../Photo/blue-cap.png'
import VectorRight from '../../Photo/VectorRight.png'
import VectorLeft from '../../Photo/VectorLeft.png'


const DetailsCap = () => {
    return (
        <div className='wrapper'>
            <div className='details_cap'>
                <div className='left_content'>
                    <div className='big_img'></div>
                    <div className='down_img'>
                        <div className='small_img'>
                            <img src={back_cap} alt='' />
                        </div>
                        <div className='small_img'>
                            <img src={side_cap} alt='' />
                        </div>
                        <div className='small_img'>
                            <img src={inside_cap} alt='' />
                        </div>
                    </div>
                </div>
                <div className='right_content'>
                    <div className='name_cap'>
                        <h3>New ERA</h3>
                        <p>BLACK SNAPBACK 59 FIFTY</p>
                    </div>
                    <div className='size'>
                        <div className='adapter'>S</div>
                        <div className='adapter'>M</div>
                        <div className='adapter active'>L</div>
                        <div className='adapter'>XL</div>

                    </div>
                    <div className='counter'>
                        <div className='minus black'>-</div>
                        <div className='count'>1</div>
                        <div className='plus black'>+</div>
                    </div>
                    <div className='sale'>
                        <div className='price_right_sale'>3200сом</div>
                        <div className='btn_test'>
                            <button className='btn'>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='similar-items'>
                <h1>Похожие товары</h1>
            </div>
            <div className='box-brand'>
                <div className='swiper'>
                    <div className='arrow'>
                        <img src={VectorLeft} alt= ""/></div>
                    <div className='Photos'>
                        <div className='firstImg'>
                            <img src={white_cap} alt= ""/>
                            <div className='name-cap'>
                                <h3>Addidas</h3>
                                <p>San Francisco Baseball</p>
                                <div className='price'>3800c</div>
                            </div>
                        </div>
                        <div className='secondImg'>
                            <img src={red_cap} alt= ""/>
                            <div className='name-cap'>
                                <h3>New Era</h3>
                                <p>New York Yankies</p>
                                <div className='price'>3800c</div>
                            </div>
                        </div>
                        <div className='thirdImg'>
                            <img src={blue_cap} alt=""/>
                            <div className='name-cap'>
                                <h3>Nike</h3>
                                <p>French Fries Series</p>
                                <div className='price'>4500c</div>
                            </div>
                        </div>
                    </div>
                    <div className='arrow'>
                        <img src={VectorRight} alt='' />
                    </div>
                </div>
            </div>
            <div className='btn_btn'>
                <p>Товар добавлен в корзину</p>
            </div>
        </div>


    )
}

export default DetailsCap