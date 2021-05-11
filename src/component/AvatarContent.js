import {Avatar,Typography} from 'neumorphism-react-design';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-github";
import logo from '../logo.svg'
const AvatarContent=()=>{
    return(<div>

    <Typography>
        <h2>Avatar</h2>
    </Typography>
    <div className="Code_output"> 
    <Avatar className="Result">
        <img style={{width:100,height:100}} src={logo} akt="demo"></img>
    </Avatar>
    </div>
<AceEditor
  placeholder="Placeholder Text"
  mode="javascript"
  theme="github"
  name="blah2"
  className="Editor"
  fontSize={14}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={`
  import React from 'react';
  import {Avatar} from 'neumorphism-react-design';
  
  function App() {
    return (
        <Avatar>
        <img style={{width:100,height:100}} src={logo} akt="bddkbj"></img>
        </Avatar>
    );
  }
  
  export default App;
}`}
/>
 </div>);
}

export default AvatarContent;