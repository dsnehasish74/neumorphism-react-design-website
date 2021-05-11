import {Input,Typography} from 'neumorphism-react-design';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-github";
const TypographyContent=()=>{
    return(<div>

    <Typography>
        <h2>Typography</h2>
    </Typography>
    <div className="Code_output"> 
    <Typography>
        <h2>Typography</h2>
    </Typography>
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
  import {Typography} from 'neumorphism-react-design';
  
  function App() {
    return (
      <Typography>
      <h2>Typography</h2>
      </Typography>
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
       <td>Color</td>
       <td>&lt;Typography color="#ffffff" &gt;\&lt;/Typography&gt;</td>
     </tr>
  </tbody>
</table>
</Typography>

    </div>);
}

export default TypographyContent;