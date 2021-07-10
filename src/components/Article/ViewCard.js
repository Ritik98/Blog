import './ViewCard.css';
import { useHistory } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {AuthContext} from '../../store/auth-context';
import { useContext } from 'react';
const ViewCard = (props) => {
    const authctx = useContext(AuthContext);
    const history = useHistory();
    const clickHandler = () => {
        history.push(`/view/${props.title}`);
    };
    
        
    const len = props.description.slice(0, 1000);
    return (
        <div>
        <div className = "viewCard" onClick = {clickHandler} >
          <img src = {props.url}  
          alt = "no image" className = "viewImage"/>
          <div className = "viewText">
              <span className = "title">
                 {props.title}
              </span>
              <span className = "muted">
                  by Ritik agarwal
              </span>
              <div className = "lowerViewText">
                  <div className = "description" >{len}...........</div>
              </div>
          </div>
         </div>
         
         </div>
        )

};
export default ViewCard;