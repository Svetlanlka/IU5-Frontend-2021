import React, { useState } from 'react'
import UserSearch from './Components/UserSearch'
import UserCard from './Components/UserCard'
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [followers, setFollowers] = useState('')
  const [following, setFollowing] = useState('')
  const [bio, setBiography] = useState('')
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [error, setError] = useState('');

  const setUserData = function ({name, login, public_repos, avatar_url, followers, following, bio}) {
    setAvatar(avatar_url);
    setName(name);
    setUserName(login);
    setRepos(public_repos);
    setFollowers(followers);
    setFollowing(following);
    setBiography(bio);
  }

  function getUserData(text) {
    fetch('https://api.github.com/users/' + text)
    .then((res) => {
      if (res.status === 404) {
        setError(true);
        return {};
      }
      return res.json();
    })
    .then((data) => {
      setUserData(data);
    })
    .catch((err) => {
      let error = 'Data not found: ' + err;
      console.log(error);
    });
  }

  const click = () => {
    setError(false);
  }

  return ( 
    error ? 
    <div>
        <div className="user_not_found">User Not Found</div>
        <div className="button_back_container">
          <button onClick={click} className="button_back">Back</button>
        </div>
    </div> :
    <div className="App">
          <body>
               <div className="search_header">Search of Github account</div>
               <div className="github_search">
               <UserSearch MakeRequest={getUserData}/>
                 {error !== '' ? <div>{error}</div> : <div></div>}
                 {(avatar !== undefined && avatar !== '' && avatar.trim('/')) ? 
                  <UserCard 
                    name={name} 
                    userName={userName} 
                    repos={repos} 
                    avatar={avatar}
                    followers={followers}
                    following={following}
                    bio = {bio}/>
                :<div></div>}
              </div>
              {/* <div className="button_back_container">
                <button onClick={click} className="button_back">Back</button>
              </div> */}
            </body>
    </div>
  );
}

export default App;