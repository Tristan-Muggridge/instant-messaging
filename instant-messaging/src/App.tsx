import { useState } from 'react'
import users from './data/users'

import './App.css'
import UserCard from './components/UserCard/UserCard';

function App() {
  
	const [friends, setFriends] = useState([users.filter(user => user.friends.some(friend => friend.id == 1))]);
	console.debug(users);
	console.debug(friends);

	return (
		<div className="App">
			
			<div className="userPane">
				<UserCard user={users[0]}/>
			</div>
			<div className="messagePane">

			</div>
		</div>
	)
}

export default App
