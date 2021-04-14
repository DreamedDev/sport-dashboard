import styles from './Header.module.css'
import profile from '../../img/portrait.jpeg'
import SearchIcon from '@material-ui/icons/Search';

const Header = ({title, subtitle}) => {

    const fetchProfile = () => {
        return profile
    }

    return(
        <div className={styles.Header}>
            <div className={styles.Location}>
                <p className={styles.Title}>{title}</p>
                <p className={styles.Subtitle}>{subtitle}</p>
            </div>
            <div className={styles.SearchInput}>
                <SearchIcon className={styles.SearchIcon}/>
                <input className={styles.Search} type="text" placeholder="Search..."/>
            </div>
            <img className={styles.Profile} src={fetchProfile()} alt="Profile"/>
        </div>
    )
}

export default Header