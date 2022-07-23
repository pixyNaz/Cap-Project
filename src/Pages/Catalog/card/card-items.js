import React from "react";
import {BsChevronDown, BsChevronUp, BsChevronRight} from "react-icons/bs"
import  './card-items.css'
import cap from '../../../../../../Catalog/shop-kepka/src/Components/photo/Cap.svg'

const CardItem = () => {
    return (
        <div className="Card-Items">
            <div className="Filter-card" >
                <BsChevronDown className='Compact-down' />
            </div>
            <div className="Card-list">
                <div className='Card'>
                    <div className='Card-img'>
                        <img src={cap} alt=""/>
                    </div>
                    <div className='Cap-title'>
                        <div className="Card-description">
                             <h4>Nike</h4>  {/* тут будет {title}*/} 
                            <p>French Fries Series</p> {/*тут {deccription}*/}
                        </div>
                        <div className="Cap-price">
                            <h4>4500c</h4> {/*тут {price} */}
                        </div>
                        
                    </div>
                </div>
                <div className='switches'>
                    <a>1</a>
                    <a>2</a>
                    <a>3</a>
                    <a>4</a>
                    <a>5</a>
                    <BsChevronRight className="switches-logo"/>
                </div>
            </div>
        </div>
    )
}

export default CardItem