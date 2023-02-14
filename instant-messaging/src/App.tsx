import { useState } from 'react'
import users from './data/users'

import './App.css'
import UserCard from './components/UserCard/UserCard';
import Message from './components/Message/Message';

function App() {
  
	const [friends, setFriends] = useState([users.filter(user => user.friends.some(friend => friend.id == 1))]);
	console.debug(users);
	console.debug(friends);

	return (
		<div className="App">
			<div className="userPane" style={{width: "33%"}}>
				<h3 style={{marginLeft: 0, textAlign:'left'}}> Friends </h3>
				<UserCard user={users[0]}/>
			</div>
			<div style={{marginLeft: "15rem"}}>
				<Message message={users[0].chats[0].messages[0]}/>
				<Message message={users[3].chats[0].messages[1]}/>
			</div>
		</div>
	)
}

export default App
