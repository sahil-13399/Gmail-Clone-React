import { Checkbox, IconButton } from '@material-ui/core'
import React from 'react'
import './EmailRow.css'
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useHistory } from 'react-router';

function EmailRow({title,subject,description,time,id}) {
    const history = useHistory();

    return (
        <div className = "emailRow" onClick = {() => history.push("/mail")}>
            <div className="emailRow_options">
                <Checkbox />
                <IconButton>
                    <StarBorderIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
            </div>
            <h3 className="emailRow_title">{title} </h3>
            <div className="emailRow_message">
                <h4>{subject} {" "}
                
                <span  className = "emailRow__description"> -
                    {description}
                </span>
                </h4>
            </div>
            <p className="emailRow_time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow
