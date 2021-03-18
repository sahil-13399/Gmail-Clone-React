import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button, IconButton } from '@material-ui/core';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase'
import firebase from 'firebase'

function SendMail() {
    const {register,handleSubmit,watch,errors} = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        console.log(data);
        db.collection("emails").add(
            {
                to:data.to,
                subject:data.subject,
                message:data.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        );
        dispatch(closeSendMessage());
    }
    return (
        <div className = "sendMail">
            <div className = "sendMail_header">
                <h3>New Message</h3>
                <IconButton onClick = {() => dispatch(closeSendMessage())}>
                    <CloseIcon className = "sendMail_close"/>
                </IconButton>
            </div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <input type="email" name="to" placeholder="To" ref = {register({required:true})}/>
                {errors.to && <p className = "sendMail_Error">To is required</p>}
                <input type="text"  name="subject" placeholder="Subject" ref = {register({required:true})}/>
                {errors.subject && <p className = "sendMail_Error">Subject is required</p>}
                <input type="text" className="sendMail_Message" name="message" placeholder="Message" ref = {register({required:true})}/>
                {errors.message && <p className = "sendMail_Error">Message is required</p>}
                <div className = "sendMail_options">
                    <Button className  = "sendMail_button" 
                    variant="contained"
                    color = "primary"
                    type = "submit"> Send </Button>
                </div>
            </form>

        </div>
    )
}

export default SendMail
