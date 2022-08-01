import React from 'react';
import './HomePage.css';
import back from './photo/back.png';
import side_cap from './photo/side_cap (1).png';
import diagonal from './photo/diagonal.png';
import ellipse_red from './photo/ellipse_red.svg';
import ellipse_yellow from './photo/ellipse_yellow.svg';
import red_rose from './photo/red_rose.png';
import black_rose from './photo/black_rose.png';
import purple_rose from './photo/purple_rose.png'
import VectorLeft from "../../photo/VectorLeft.png";
import white_cap from "../../photo/white-cap.png";
import red_cap from "../../photo/red-cap.png";
import blue_cap from "../../photo/blue-cap.png";
import VectorRight from "../../photo/VectorRight.png";


const NewCollection = () => {
    return (
        <div className="sectionNewCollection">
            <div className='content_text'>
                <div className="yellow">
                    <img src={ellipse_yellow} alt=""/>
                </div>
                <div className="diagonal">
                    <img src={side_cap} alt=""/>
                </div>
                <div className="back">
                    <img src={back} alt="" />
                </div>
                <div className="red">
                    <img src={ellipse_red} alt=""/>
                </div>
                <h1> New Era <div className='dot'></div></h1>
                <div className="description">
                    <p> Новая коллекция 2021 уже доступны на заказ
                        яркие цвета, винтажный принт 70х, тематические
                        группы и отличное качество </p>
                </div>
                    <button className="btn btn-yellow">открыть каталог</button>
                    <div className="side">
                        <img src={diagonal} alt=""/>
                    </div>
                </div>
            <div className="topSellers">
                <div className="capsRoses">
                    <div className="Houston">
                        <img src={red_rose} alt=""/>
                    </div>
                    <div className="Chicago">
                        <img src={black_rose} alt=""/>
                    </div>
                    <div className="Chicago">
                        <img src={purple_rose} alt=""/>
                    </div>
                </div>
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
            <div className="supreme">
                <div className="collection">

                </div>

            </div>
        </div>


    )

}

export default NewCollection
