import {Div,Avatar,Button} from 'neumorphism-react-design'
import logo from '../logo.svg'
import image from './support.png'
const Installation=()=>{
    return(<div className="installation">
        <Avatar><img style={{width:100,height:100}} src={logo} akt="bddkbj"></img></Avatar>
        <h3>React UI Library To Create Neumorphic Design</h3>
        <Div inset width="80%" height="30px" radius="10px">npm i neumorphism-react-design</Div>
        <div class="support">
            <a href="https://github.com/dsnehasish74/neumorphism-react-design"><Button padding="10px" fontsize="1.5rem"><i class="fab fa-github"></i></Button></a>
        </div>
        <div class="support">
            <a href="https://www.buymeacoffee.com/sdhar"><Button padding="10px" fontsize="1.5rem"><img src={image} alt="support"></img></Button></a>
        </div>
    </div>);
}

export default Installation;