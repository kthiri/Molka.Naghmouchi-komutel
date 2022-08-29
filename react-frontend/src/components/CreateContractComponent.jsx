import React, { Component } from 'react'
import Service from '../services/Service';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            nom: '',
            address: '',
            pays: '',
            ville: '',
            telephone: '',
            debutContract: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeDebutHandler=this.changeDebutHandler.bind(this);
        this.changePaysHandler=this.changePaysHandler.bind(this);
        this.changeVilleHandler=this.changeVilleHandler.bind(this);
        this.changeTelephoneHandler=this.changeTelephoneHandler.bind(this);

        this.saveContract = this.saveContract.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }      
    }
    saveContract = (e) => {
        e.preventDefault();
        let contract = {nom: this.state.nom, address: this.state.address, pays: this.state.pays,ville: this.state.ville, telephone:this.state.telephone, debutContract:this.state.debutContract};
        console.log('employee => ' + JSON.stringify(contract));

        // step 5
        if(this.state.id === '_add'){
            Service.createContract(contract).then(res =>{
                this.props.history.push('/');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({nom: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    changePaysHandler= (event) => {
        this.setState({pays: event.target.value});
    }
    changeVilleHandler= (event) => {
        this.setState({ville: event.target.value});
    }
    changeTelephoneHandler= (event) => {
        this.setState({telephone: event.target.value});
    }
    changeDebutHandler= (event) => {
        this.setState({debutContract: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Ajouter Contract</h3>
        }else{
            return <h3 className="text-center">Update Contract</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nom </label>
                                            <input placeholder="Nom" name="nom" className="form-control" 
                                                value={this.state.nom} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address </label>
                                            <input placeholder="Address" name="lastName" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Pays </label>
                                            <input placeholder="Pays " name="lastName" className="form-control" 
                                                value={this.state.pays} onChange={this.changePaysHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Ville </label>
                                            <input placeholder="Ville " name="lastName" className="form-control" 
                                                value={this.state.ville} onChange={this.changeVilleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Telephone </label>
                                            <input placeholder="Telephone " name="lastName" className="form-control" 
                                                value={this.state.telephone} onChange={this.changeTelephoneHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date Debut </label>
                                            <input placeholder="Date Debut" type="date" name="lastName" className="form-control" 
                                                value={this.state.debutContract} onChange={this.changeDebutHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveContract}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent
