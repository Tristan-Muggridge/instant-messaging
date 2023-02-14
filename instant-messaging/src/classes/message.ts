import { IUser } from "./user"

export interface IMessage {
    id: number
    toUserId: number
	fromUserId: number
	content: string
	sentDate: Date
	lastModifiedDate: Date
}

class Message implements IMessage {
    static messageIdTracker = 0;

    id: number
    toUserId: number
	fromUserId: number

	content: string
	sentDate: Date
	lastModifiedDate: Date

    constructor(toUserId: number, fromUserId: number, content: string, sentDate?: Date, lastModifiedDate?: Date) {
        this.id = ++Message.messageIdTracker;
        this.toUserId = toUserId;
        this.fromUserId = fromUserId;

        this.content = content;
        this.sentDate = sentDate || new Date();
        this.lastModifiedDate = lastModifiedDate || new Date();
    }
}

export default Message;