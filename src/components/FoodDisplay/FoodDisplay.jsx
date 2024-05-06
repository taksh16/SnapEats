import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

function FoodDisplay({category,setCategory}) {
    const {food_list}  = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2 >Top dishes near you</h2>
            <div className="food-display-list">
                {
                    food_list.map((item,index) => {
                        if(category===item.category){
                            return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
                        }
                        else if(category==='All'){
                            return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />

                        }
                        console.log(category);
                    }
                    )
                }
            </div>
        </div>
    )
}

export default FoodDisplay
