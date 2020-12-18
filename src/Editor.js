import React, {useState} from "react";
import "./Editor.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp} from '@fortawesome/free-brands-svg-icons';


const freeCodeCamp = <FontAwesomeIcon icon={faFreeCodeCamp} />


const Editor = (props) => {

    return(
        <div id="editor-wrapper" className={`editor-wrapper ${props.classes[0]}`} style={props.editorExpand ? {width:"99%", margin:"2em 0"} : {}}>
            <div className="toolbar" style={props.editorExpand ? {width:"99.5%"} :{}}>
                <span>{freeCodeCamp}</span> Editor 
                <button
                onClick={() => {
                    props.setEditorExpand(!props.editorExpand)
                }}
                >{props.classes[2]}</button>
            </div>
            <textarea
            style={props.editorExpand ? {minHeight:"100vh"} :{}}
            value={props.input}
            onChange={(event) => {
                props.setInput(event.target.value)
            }}
            >
            </textarea>
        </div>
    )
}

export default Editor;