import { Checkbox,IconButton } from '@material-ui/core'
import React from 'react'
import './EmailList.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import Section from './Section.js'
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';

function EmailList() {
    return (
        <div className = "emaillist">
            <div className = "emaillist_settings">
                <div className = "emaillist_settings_left">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className = "emaillist_settings_right">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>

            </div>
            <div className = "emaillist_sections">
                <Section Icon = {InboxIcon} title = "Primary" color = "red" selected = {true} />
                <Section Icon = {PeopleIcon} title = "Social" color = "#1A73E8" selected = {false} />
                <Section Icon = {LocalOfferIcon} title = "Promotions" color = "green" selected = {false} />
            </div>           
            <div className = "emaillist_list">
                <EmailRow 
                title = "Twitch"
                subject = "Hey there !!"
                description = "Test email"
                time = "10pm"
                />
                <EmailRow 
                title = "Twitch"
                subject = "Hey there !!"
                description = "Test email"
                time = "10pm"
                />
                <EmailRow 
                title = "Twitch"
                subject = "Hey there !!"
                description = "Test email"
                time = "10pm"
                />
            </div> 
        </div>
    )
}

export default EmailList
