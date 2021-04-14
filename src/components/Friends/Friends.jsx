import styles from './Friends.module.css'
import FriendsHeader from "./FriendsHeader/FriendsHeader";
import FriendsCategories from "./FriendsCategories/FriendsCategories";
import FriendsList from "./FriendsList/FriendsList";
import exampleFriends from "../../data/ExampleFriends";

const Friends = () => {

    return(
        <div className={styles.Friends}>
            <FriendsHeader/>
            <FriendsCategories/>
            <FriendsList friends={exampleFriends}/>
        </div>
    )
}

export default Friends