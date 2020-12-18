import React, {useState} from "react";
import Editor from "./Editor";
import Previewer from "./Previewer";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt} from '@fortawesome/free-solid-svg-icons';
import { faCompressAlt} from '@fortawesome/free-solid-svg-icons';

const ExpandArrowsAlt = <FontAwesomeIcon icon={faExpandArrowsAlt}/>
const CompressAlt = <FontAwesomeIcon icon={faCompressAlt}/>

const App = () => {
  const [input, setInput] = useState(`
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`\`\` <div></div> \`\`\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!  
Or _italic_.    
Or... wait for it... **_both!_**  
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
        
![React Logo w/ Text](https://goo.gl/Umyytc)
  `
  )

  //Expand or hide
  const [editorExpand, setEditorExpand] = useState(false);
  const [previewerExpand, setPreviewerExpand] = useState(false); 
  
  const classes = 
    editorExpand 
  ? ["expand", "hide", CompressAlt]
  : previewerExpand 
  ? ["hide", "expand", CompressAlt]
  : ["", "", ExpandArrowsAlt]; 
  

  return(
    <div id="wrapper">
      <Editor 
      input={input}
      setInput={setInput}
      editorExpand={editorExpand}
      setEditorExpand={setEditorExpand}
      classes={classes}
      
      />
      <Previewer 
      input={input}
      previewerExpand={previewerExpand}
      setPreviewerExpand={setPreviewerExpand}
      classes={classes}
      
      />
    </div>
  )
  }

export default App;