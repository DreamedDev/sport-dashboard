import styles from './FriendsList.module.css'
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';

const FriendsList = ({friends}) => {
    return(
        <div className={styles.FriendsList}>
            {friends.map((friend)=>(
                <div className={styles.Friend}>
                    <img className={styles.Profile} src={friend.img} alt="profile"/>
                    <div className={styles.Info}>
                        <p className={styles.Name}>{friend.name}</p>
                        <p className={styles.Sport}>{friend.sport}</p>
                        <p className={styles.LastTime}>{friend.lastTime} min ago</p>
                    </div>
                    <div className={styles.Mail}>
                        <MailOutlinedIcon/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FriendsList