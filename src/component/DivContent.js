import {Div,Typography} from 'neumorphism-react-design';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-github";
const DivContent=()=>{
    return(<div>

    <Typography>
        <h2>Simple Div</h2>
    </Typography>
    <div className="Code_output"> 
        <Div className="Result"></Div>
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
  import {Div} from 'neumorphism-react-design';
  
  function App() {
    return (
      <Div></Div>
    );
  }
  
  export default App;
}`}
  setOptions={{
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2,
  }}/>

<Typography>
        <h2>Inset Div</h2>
    </Typography>
    <div className="Code_output"> 
        <Div  inset className="Result"></Div>
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
  import {Div} from 'neumorphism-react-design';
  
  function App() {
    return (
      <Div inset></Div>
    );
  }
  
  export default App;
}`}
  setOptions={{
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2,
  }}/>

<Typography>
        <h2>Circle</h2>
    </Typography>
    <div className="Code_output"> 
        <Div circle className="Result"></Div>
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
  import {Div} from 'neumorphism-react-design';
  
  function App() {
    return (
      <Div circle></Div>
    );
  }
  
  export default App;
}`}
/>
  <Typography>
  <h2>Parameters:</h2> 
  </Typography>
  <Typography>
  <table className="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Example</th>
    </tr>
   </thead>
   <tbody>
     <tr>
       <td>Background Color</td>
       <td>&lt;Div bg="#ffffff" &gt;\&lt;/div&gt;</td>
     </tr>
     <tr>
     <td>Width</td>
       <td>&lt;Div width="100%" &gt;\&lt;/div&gt;</td>
     </tr>
     <tr>
     <td>Height</td>
       <td>&lt;Div height="100%" &gt;\&lt;/div&gt;</td>
     </tr>
     <tr>
     <td> Border Radius</td>
       <td>&lt;Div radius="25px" &gt;\&lt;/div&gt;</td>
     </tr>
     <tr>
     <td>Padding</td>
       <td>&lt;Div padding="10px" &gt;\&lt;/div&gt;</td>
     </tr>
     <tr>
     </tr>
  </tbody>
</table>
</Typography>

    </div>);
}

export default DivContent;