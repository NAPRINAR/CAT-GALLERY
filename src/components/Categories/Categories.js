import React, {useEffect, useState} from 'react';
import styles from "./categories.module.css"
import axios from "axios"
import Sidebar from "./Sidebar/Sidebar";
import ImageContent from "./ImageContent/ImageContent";
import {useDispatch, useSelector} from "react-redux";
import {categoriesFetchData} from "../../redux/actions/slice__catsAction";


const Categories = () => {
    const [categories, setCategories] = useState([{}])
    const [position, setPosition] = useState('')
    const dispatch = useDispatch()
    const catsData = useSelector(state => state.slice__catsReducer.categories)



    //GETTING CATEGORIES DATA
    useEffect(() => {
        dispatch(categoriesFetchData())
    }, [])


    //GETTING SELECTED POSITION ON SIDEBAR
    const getSelectedPosition = (position) => {
        setPosition(position)
    }
    //


    return (
        <div>
            <div className={styles.wrapper}>
                <Sidebar getSelectedPosition={getSelectedPosition} categories={catsData}/>
                <ImageContent position={position}/>
            </div>
        </div>
    );
};

export default Categories;