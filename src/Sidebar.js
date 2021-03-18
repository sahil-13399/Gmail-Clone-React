import { Button } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption.js';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { openSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';

function Sidebar() {
    const dispatch = useDispatch();
    return (
        <div className = "sidebar">
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar_compose" onClick = {() => dispatch(openSendMessage())}>
                Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title = "Inbox" num = {34} selected = {false}/>
            <SidebarOption Icon={StarIcon} title = "Starred" num = {34} selected = {false}/>
            <SidebarOption Icon={AccessTimeIcon} title = "Snoozed" num = {34} selected = {false}/>
            <SidebarOption Icon={LabelImportantIcon} title = "Important" num = {34} selected = {false}/>
            <SidebarOption Icon={NearMeIcon} title = "Sent" num = {34} selected = {false}/>
            <SidebarOption Icon={NoteIcon} title = "Drafts" num = {34} selected = {false}/>
            <SidebarOption Icon={ExpandMoreIcon} title = "More" num = {34} selected = {false}/>
        <div className="sidebar_footer"> 
            <div className = "sidebar_footerIcons">
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <DuoIcon />
                </IconButton>
                <IconButton>
                    <PhoneIcon />
                </IconButton>
            </div>
        </div>
   </div>
    )
}

export default Sidebar
