import {useState} from 'react'
import {Div,Text,Container,Typography} from 'neumorphism-react-design';
import DivContent from './component/DivContent';
import InputContent from './component/InputContent';
import ButtonContent from './component/ButtonContent';
import ErrorComponent from './component/ErrorComponent';
import TextContent from './component/TextContent';
import TypographyContent from './component/TypographyContent'
import AvatarContent from './component/AvatarContent'
import Installation from './component/Installation'
import './App.css'
function App() {
  const [documentation,setDocument]=useState(<Installation/>);
  return (
    <Container className="main_container">
      <Div width="200px" height="100vh" padding="0px" radius="0px" className="nav">
          <Text className="first_nav_link" padding="10px" fontSize="20px" fontWeight="600" onClick={()=>setDocument(<Installation/>)}>Installation</Text>
          <Text className="nav_link" padding="10px" fontSize="20px" fontWeight="600">Components</Text>
          <ul className="component_list">
              <li><Text  padding="10px" fontSize="18px" onClick={()=>setDocument(<AvatarContent/>)}>Avatar</Text></li>
              <li><Text  padding="10px" fontSize="18px" onClick={()=>setDocument(<ButtonContent/>)}>Button</Text></li>
              <li><Text  padding="10px" fontSize="18px" onClick={()=>setDocument(<ErrorComponent/>)}>Container</Text></li>
              <li><Text  padding="10px" fontSize="18px" onClick={()=>setDocument(<DivContent/>)}>Div</Text></li>
              <li><Text  padding="10px" fontSize="18px" onClick={()=>setDocument(<InputContent/>)}>Input</Text></li>
              <li><Text  padding="10px" fontSize="18px" onClick={()=>setDocument(<TextContent/>)}>Text</Text></li>
              <li><Text  padding="10px" fontSize="18px" onClick={()=>setDocument(<TypographyContent/>)}>Typography</Text></li>
          </ul>
      </Div>
      <div className="body">
        <div>
          <Typography>
          <h1>neumorphism-react-design</h1>
          </Typography>
        </div>
        <Div width="100%" height="80%" style={{overflowY: 'scroll'}}>
          {documentation}
        </Div>
      </div>
    </Container>
  );
}

export default App;
