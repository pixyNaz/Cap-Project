import React, {useState, useEffect} from 'react'
import './Details_cap.css'
import back_cap from '../../photo/back_cap.png'
import side_cap from '../../photo/side_cap.png'
import inside_cap from '../../photo/inside_cap.png'
import white_cap from '../../photo/white-cap.png'
import red_cap from '../../photo/red-cap.png'
import blue_cap from '../../photo/blue-cap.png'
import VectorRight from '../../photo/VectorRight.png'
import VectorLeft from '../../photo/VectorLeft.png'

const DetailsCap = () => {
    const [toggleState, setToggleState] = useState(1);
    const [quantity, setCount] = useState(0);

    useEffect(() => {
        console.log(toggleState)
    }, [toggleState])

    const toggleAdapter = (index) => {
        setToggleState(index)
    }
    const decrement = () => {
        if(quantity > 1){
            setCount(prevCount => prevCount - 1);
        }
    }
    const increment = () => {
        if(quantity < 100){
            setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <div className="container">
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
                        <input className={toggleState === 1 ? "adapter adapter-active" : "adapter"}
                               type="button" value='S' onClick={() => toggleAdapter(1)}/>
                        <input className={toggleState === 2 ? "adapter adapter-active" : "adapter"}
                               type="button" value='M' onClick={() => toggleAdapter(2)}/>
                        <input className={toggleState === 3 ? "adapter adapter-active" : "adapter"}
                               type="button" value='L' onClick={() => toggleAdapter(3)}/>
                        <input className={toggleState === 4 ? "adapter adapter-active" : "adapter"}
                               type="button" value='XL' onClick={() => toggleAdapter(4)}/>
                    </div>
                    <div className='counter'>
                        <div className='minus black' onClick={decrement}>
                            <button>-</button></div>
                        <div className='count' >{quantity}</div>
                        <div className='plus black' onClick={increment}>
                            <button>+</button></div>
                    </div>
                    <div className='sale'>
                        <div className='price_right_sale'>3200сом</div>
                        <div className='btn_test'>
                            <button className='btn' >
                                Добавить в корзину</button>
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
    </div>

    )
}

export default DetailsCap