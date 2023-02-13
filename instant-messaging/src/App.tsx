import { useState } from 'react'
import users from './data/users'

import './App.css'

function App() {
  
	const [friends, setFriends] = useState([users.filter(user => user.friends.some(friend => friend.id == 1))]);
	console.debug(users);
	console.debug(friends);

	return (
		<div className="App">
			
			<div className="userPane">
				<div className="user-card">
					
				</div>
			</div>
			<div className="messagePane">

			</div>
		</div>
	)
}

export default App
