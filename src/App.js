import React, { Component } from 'react';

import Modal from './modal';

class App extends Component {

    constructor() {
        super();

        this.state = {
            isShowing: false,
            name:"",
            data:[],
            searchField:""
        }
    }

    openModalHandler = (koushik) => {
        this.setState({
            isShowing: true
        });
        this.setState({
          name:koushik.id
        });
        
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }
    componentDidMount() {
      fetch('https://api.jsonbin.io/b/5e899b238841e979d0fe0284/1')
      .then(response => response.json())
      .then(users => this.setState({data:users}));
    }
    render () {
      const{data, searchField}=this.state;
    // const filteredusers = data.filter(data => data.name.includes(searchField))  
    const filteredusers = data.filter(data => data.real_name.toLowerCase().includes(searchField.toLocaleLowerCase()))

        return (
            <div className="container">
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                <div style={{textAlign:"center"}}>
                    <h2 className="h2">Welcome!!</h2>
                    <div className="searchdiv">
                        <input type="text" placeholder="Search Names" className="searchbar" onChange={e => this.setState({ searchField : e.target.value})}/> 
                    </div>
                    <div className="">
                        {filteredusers.map(koushik => <div className="card" key={koushik.id}>
                            <h1 style={{color:"white"}}>{koushik.real_name}</h1>
                            <p style={{color:"white"}}>{koushik.tz}</p>
                            <div className="button">
                                <button onClick={()=> this.openModalHandler(koushik)}>Info</button>
                            </div>    
                        </div>)}
                    </div>
                </div>
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    flag={this.state.name}>
                </Modal>
            </div>
        );
    }
}

export default App;