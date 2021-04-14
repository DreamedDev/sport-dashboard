import styles from './Drawer.module.css'

import {
    Notifications,
    NotificationsOutlined,

    Home,
    HomeOutlined,

    Description,
    DescriptionOutlined,

    Assessment,
    AssessmentOutlined,

    Timeline,

    PlayCircleFilled,
    PlayCircleOutline,

    MeetingRoom,
    MeetingRoomOutlined
} from "@material-ui/icons";
import {useState} from "react";

const Drawer = () => {
    const options = [{
        key: 0,
        iconFilled: <Notifications/>,
        iconOutlined: <NotificationsOutlined/>
    },{
        key: 1,
        iconFilled: <Home/>,
        iconOutlined: <HomeOutlined/>
    },{
        key: 2,
        iconFilled: <Description/>,
        iconOutlined: <DescriptionOutlined/>
    },{
        key: 3,
        iconFilled: <Assessment/>,
        iconOutlined: <AssessmentOutlined/>
    },{
        key: 4,
        iconFilled: <Timeline/>,
        iconOutlined: <Timeline/>
    },{
        key: 5,
        iconFilled: <PlayCircleFilled/>,
        iconOutlined: <PlayCircleOutline/>
    },{
        key: 6,
        iconFilled: <MeetingRoom/>,
        iconOutlined: <MeetingRoomOutlined/>
    }]

    const[active, setActive] = useState(1)

    const chooseOption = (key) => {
        setActive(key)
    }

    return(
        <div className={styles.Drawer}>
            {options.map((option) => (
                <div key={option.key} className={styles.Option}
                     style={option.key===active ? {backgroundColor: "#5a5080"} : {}}
                     onClick={() => chooseOption(option.key)}
                >
                    {option.key===active ? option.iconFilled : option.iconOutlined}
                </div>
            ))}
        </div>
    )
}

export default Drawer