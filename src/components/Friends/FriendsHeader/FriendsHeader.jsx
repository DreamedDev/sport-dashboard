import styles from './FriendsHeader.module.css'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';

const FriendsHeader = () => {
    return(
        <div className={styles.FriendsHeader}>
            <PeopleAltOutlinedIcon/>
            <p className={styles.Label}>Friends</p>
            <p className={styles.Link}>View All</p>
        </div>
    )
}

export default FriendsHeader