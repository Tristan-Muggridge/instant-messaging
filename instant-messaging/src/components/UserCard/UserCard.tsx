import styles from './UserCard.module.css'
import avatar from '../../assets/avatar.png'

import User from '../../classes/user'

interface IProps {
    user: User
}

export default function ({user}: IProps) {
    return (
        <div className={styles.userCard}>
            <div className={styles.avatarFrameBottom} />
            <img src={avatar} alt="" className={styles.userAvatar} />
            <div className={styles.avatarFrame} />
        </div>
    )   
}