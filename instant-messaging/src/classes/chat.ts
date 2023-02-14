import { IMessage } from "./message"
import { IUser } from "./user"


export interface IChat {
	id: number;
    users: IUser[];
	messages: IMessage[];

    addMessage(message: IMessage):void;
}

class Chat implements IChat {
    static chatIdTracker = 0;

    id: number;
    users: IUser[];
	messages: IMessage[];

    constructor(users: IUser[], messages?: IMessage[]) {
        this.id = ++Chat.chatIdTracker;
        this.users = users;
        this.messages = messages || [];
    }

    addMessage = (message: IMessage) => {this.messages.push(message)};
}

export default Chat;