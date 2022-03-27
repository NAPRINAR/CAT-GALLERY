import React, {useEffect,useState} from 'react';
import axios from "axios"
import styles from "./imageContent.module.css"
import {useDispatch, useSelector} from "react-redux";
import {imagesFetchData} from "../../../redux/actions/slice__catsAction";


const ImageContent = ({position}) => {
    const [imagesCount,setImagesCount] = useState(10)

    const imagesData = useSelector(state => state.slice__catsReducer.images)
    const dispatch = useDispatch()


    // GETTING IMAGES AND SET THEM COUNT
    useEffect(()=>{
        dispatch(imagesFetchData(imagesCount,position.id))
    },[imagesCount,position])


    //




    //MORE IMAGES LOGIC
    const onButtonClick = () => {
        setImagesCount(prevState => prevState + 10)
    }

    return (
        <div>
            <div className={styles.imagesBlock}>
                {imagesData && imagesData.map((el,i)=>{
                    return(
                        <div key={i} className={styles.imageWrapper} id={el.id}>
                            <img src={`${el.url}`} alt=""/>
                        </div>
                    )
                })}
            </div>
            <div className={styles.moreButton}>
                <button onClick={onButtonClick}>More Cats</button>
            </div>

        </div>
    );
};

export default ImageContent;