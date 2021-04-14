import styles from './FriendsCategories.module.css'
import {useState} from "react";

const FriendsCategories = () => {

    const [activeCategory, setActiveCategory] = useState(0)

    const onCategoryClick = (key) => {
        setActiveCategory(key)
    }

    return(
        <div className={styles.FriendsCategories}>
            <div key={0} onClick={() => onCategoryClick(0)} className={activeCategory===0 ? styles.BtnActive : styles.Btn}>Activities</div>
            <div key={1} onClick={() => onCategoryClick(1)} className={activeCategory===1 ? styles.BtnActive : styles.Btn}>Online</div>
        </div>
    )
}

export default FriendsCategories