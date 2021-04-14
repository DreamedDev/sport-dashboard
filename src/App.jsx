import './App.css'
import styles from './App.module.css'
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Friends from "./components/Friends/Friends";

const App = () => {
    return(
        <div className={styles.App}>
            <Drawer/>
            <Header title="Jogging" subtitle="Dashboard"/>
            <Content/>
            <Friends/>
        </div>
    )
}

export default App