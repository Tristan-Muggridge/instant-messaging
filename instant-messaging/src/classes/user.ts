import { IChat } from "./chat"

export interface IUser {
    id: number
	username: string
	displayName: string
	friends: IUser[]
	chats: IChat[]
}

class User implements IUser {
    static userIdTracker = 0;
    
    id: number;
    username: string;
    displayName: string;
    friends: IUser[];
    chats: IChat[];

    constructor (username: string, displayName: string, friends?: IUser[], chats?: IChat[]) {
        this.id = ++User.userIdTracker;
        this.username = username;
        this.displayName = displayName;
        this.friends = friends || [];
        this.chats = chats || [];
    }

    addFriends = (friends: IUser[]) => this.friends = [...this.friends, ...friends];
}

export default User;