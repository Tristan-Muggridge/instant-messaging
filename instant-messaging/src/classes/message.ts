import { IUser } from "./user"

export interface IMessage {
    id: number
    toUser: IUser
	fromUser: IUser
	content: string
	sentDate: Date
	lastModifiedDate: Date
}

class Message implements IMessage {
    static messageIdTracker = 0;

    id: number
    toUser: IUser
	fromUser: IUser

	content: string
	sentDate: Date
	lastModifiedDate: Date

    constructor(toUser: IUser, fromUser: IUser, content: string, sentDate?: Date, lastModifiedDate?: Date) {
        this.id = ++Message.messageIdTracker;
        this.toUser = toUser;
        this.fromUser = fromUser;

        this.content = content;
        this.sentDate = sentDate || new Date();
        this.lastModifiedDate = lastModifiedDate || new Date();
    }
}

export default Message;