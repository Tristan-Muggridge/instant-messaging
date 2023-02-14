
import User from "../classes/user"
import Message from "../classes/message";

const tristan = new User("tristan", "Tmuggz");
const joel = new User("joel", "whirly");
const marcus = new User("marcus", "aqua");
const wendy = new User("wendy", "wendles");

tristan.addFriends([joel, marcus, wendy]);
joel.addFriends([tristan, wendy]);
marcus.addFriends([tristan]);
wendy.addFriends([joel, tristan]);

tristan.startChat(wendy);

tristan.chats[0].addMessage(new Message(wendy.id, tristan.id, "Sup dude!"))
wendy.chats[0].addMessage(new Message(tristan.id, wendy.id, "Yo"))

const users: User[] = [
    tristan,
    joel,
    marcus,
    wendy,
]

export default users;