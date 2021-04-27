import React, {useState} from 'react'
export default function UserSearch({MakeRequest}) {
    const [text, SetText] = useState('');
    function Submit(event) {
        event.preventDefault();
        if (text.trim())
            MakeRequest(text);
        SetText('');
        }

    return (
        <div className="">
            <form onSubmit={(event) => {Submit(event)}}>
                <input type="text" placeholder="Enter username" value={text} className="search_field" onChange={
                    e => SetText(e.target.value)
                }/>
                <button type="submit" className="search_button">Search</button>
            </form>
        </div>
    );
}