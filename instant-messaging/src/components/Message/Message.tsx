import { IMessage } from '../../classes/message'
import UserCard from '../UserCard/UserCard'

import styles from './Message.module.css'

interface IProps {
    message: IMessage
}

export default function ({message}: IProps) {
    return (        
       <div style={{display: "flex", flexDirection: "column",  gap: "4rem"}}>
            <div className={styles.container}>
                <div className={ message.fromUserId == 1 ? styles.sent : styles.received}>
                    <p>{message.content}</p>
                </div>
            </div>
       </div>
    )
}