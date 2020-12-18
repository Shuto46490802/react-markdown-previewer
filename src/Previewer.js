import React from "react";
import ReactMarkdown from 'react-markdown';
import "./Previewer.css";
import gfm from 'remark-gfm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp} from '@fortawesome/free-brands-svg-icons';

const linkBlock = (props: { href: string; children: React.ReactNode }) => {
    const { href, children } = props;

    if (href.match('http')) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }
    return <a href={href}>{children}</a>;
};


const freeCodeCamp = <FontAwesomeIcon icon={faFreeCodeCamp} />

const Previewer = (props) => {
    return(
        <div id="previewer-wrapper" className={`previewer-wrapper ${props.classes[1]}`}  style={props.previewerExpand ? {width:"98%"} : {}}>
            <div className="toolbar" style={props.previewerExpand ? {width:"99.1%"} : {}}>
                <span>{freeCodeCamp}</span> Previewer
                <button
                onClick={() => {
                    props.setPreviewerExpand(!props.previewerExpand)
                }}
                >{props.classes[2]}</button>
            </div>
            <div id="previewer">
                <ReactMarkdown plugins={gfm} source={props.input} renderers={{link : linkBlock}}>
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default Previewer