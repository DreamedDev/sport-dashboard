import styles from './Content.module.css'
import BuildingInfo from "../BuildingInfo/BuildingInfo";

const Content = () => {
    return(
        <div className={styles.Content}>
            <BuildingInfo/>
        </div>
    )
}

export default Content