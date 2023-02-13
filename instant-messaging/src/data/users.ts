
import User from "../classes/user"

const tristan = new User("tristan", "Tmuggz");
const joel = new User("joel", "whirly");
const marcus = new User("marcus", "aqua");
const wendy = new User("wendy", "wendles");

tristan.addFriends([joel, marcus, wendy]);
joel.addFriends([tristan, wendy]);
marcus.addFriends([tristan]);
wendy.addFriends([joel, tristan]);

const users: User[] = [
    tristan,
    joel,
    marcus,
    wendy,
]

export default users;