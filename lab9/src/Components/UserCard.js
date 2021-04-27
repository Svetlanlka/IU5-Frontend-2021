import React from 'react'
export default function UserCard({name, userName, repos, avatar, followers, following, bio}) {
    return (
        <div className="userCard">
            <a href={"https://www.github.com/" + userName} target="_blank" rel="noreferrer">
                <img className="user_photo" src={avatar} alt={userName}/>
            </a>
            <div className="user_description">
                <div className="user_profile">
                    {name}
                </div>
                <div className="user_name">
                    {userName}
                </div>
                <div className="user_repository">
                    {repos ? 
                    <span>Repositories: {repos}</span> : <span>Repositories doesn't exist</span>}
                </div>
                <div className="user_follow">
                    followers: {followers}
                </div>
                <div className="user_follow">
                    following:{following}
                </div>
                <div className="user_bio">
                    {bio ?
                    <div>Biography:{bio}</div>
                    : <div></div>}
                </div>
            </div>
        </div>
    );
}