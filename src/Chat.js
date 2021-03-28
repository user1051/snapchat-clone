import { Avatar } from '@material-ui/core'
import React from 'react'
import StopRoundedIcon from '@material-ui/icons/StopRounded'
import './Chat.css'
import ReactTimeago from 'react-timeago'
import { selectImage } from './features/appSlice'
import { useDispatch } from 'react-redux'
import { db } from './firebase'
import { useHistory } from 'react-router-dom'


function Chat({ id, profilePic, username, timestamp, imageUrl, read }) {

    const dispatch = useDispatch()

    const history = useHistory()

    const open = () => {
        if (!read) {
            dispatch(selectImage(imageUrl))
            db.collection('posts').doc(id).set({
                read: true,
            },
            { merge: true }
            );
            history.push('/chats/view')
        }
    }

    return (
        <div className="chat" onClick={open}>
            <Avatar src={profilePic} className="chat__avatar"/>
            <div className="chat__info">
                <h4>{username}</h4>
                <p>Tap to view - <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()}/></p>
            </div>
            {!read && <StopRoundedIcon className="chat__readIcon"/>}
        </div>
    )
}

export default Chat
