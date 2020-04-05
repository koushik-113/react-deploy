import React, {Component} from 'react';
import Modaldata  from "./components/modaluser"
import './App.css';


class modal extends Component {
    constructor(){
        super();
        this.state={
            data: []
        }
    }    
    
    componentDidMount() {
        fetch('https://api.jsonbin.io/b/5e899b238841e979d0fe0284/1')
        .then(response => response.json())
        .then(users => this.setState({data:users}));
      }
   render(){ 
       const{data} = this.state;
    const referenceid = this.props.flag;
    // const finaluser = data.filter(data => data.id.includes(referenceid));
    const finaluser = data.filter(data => data.id.includes(referenceid))


    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    // transform: this.props.show ? 'translateY(-90vh)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0',
                    position: this.props.show ? 'fixed' : 'fixed',
                    top: this.props.show ? '0px' : '1000px',
                    right: this.props.show ? '250px' : '1000px'
                }}>
                <div className="modal-header">
                    <h3>Your Activities</h3>
                    <span className="close-modal-btn" onClick={this.props.close}>×</span>
                </div>
                <div className="modal-body">
                    <Modaldata updatedlist={finaluser}/>
                </div>
                
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={this.props.close}>CLOSE</button>
                    {/* <button className="btn-continue">CONTINUE</button> */}
                </div>
            </div>
        </div>
    )
            }
}

export default modal;