import {Text,Typography} from 'neumorphism-react-design';
import AceEditor from "react-ace";

const TextContent=()=>{
    return(
        <div>

    <Typography>
        <h2>Text</h2>
    </Typography>
    <div className="Code_output"> 
        <Text className="Result" padding="10px">Click Me</Text>
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
  import {Text} from 'neumorphism-react-design';
  
  function App() {
    return (
      <Text>Click Me</Text>
    );
  }
  
  export default App;
}`}
/>

<Typography>
        <h2>Clicked Text</h2>
    </Typography>
    <div className="Code_output"> 
        <Text className="Result" clicked padding="10px">Click Me</Text>
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
  import {Text} from 'neumorphism-react-design';
  
  function App() {
    return (
      <Text clicked>Click Me</Text>
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
       <td>&lt;Text bg="#ffffff" &gt;\&lt;/Text&gt;</td>
     </tr>
     <tr>
     <td>Width</td>
       <td>&lt;Text width="100%" &gt;\&lt;/Text&gt;</td>
     </tr>
     <tr>
     <td>Height</td>
       <td>&lt;Text height="100%" &gt;\&lt;/Text&gt;</td>
     </tr>
     <tr>
     <td> Border Radius</td>
       <td>&lt;Text radius="25px" &gt;\&lt;/Text&gt;</td>
     </tr>
     <tr>
     <td>Padding</td>
       <td>&lt;Text padding="10px" &gt;\&lt;/Text&gt;</td>
     </tr>
     <tr>
     <td>Font Size</td>
       <td>&lt;Text fontSize="10px" &gt;\&lt;/Text&gt;</td>
     </tr>
     <tr>
     <td>Font Weight</td>
       <td>&lt;Text fontWeight="10px" &gt;\&lt;/Text&gt;</td>
     </tr>
     <tr>
     <td>Color</td>
       <td>&lt;Text color="10px" &gt;\&lt;/Text&gt;</td>
     </tr>
     <tr>
     <td>Low Shadow on Click</td>
       <td>&lt;Text low &gt;\&lt;/Text&gt;</td>
     </tr>
     <tr>
     </tr>
  </tbody>
</table>
</Typography>

    </div>
    );
}

export default TextContent;