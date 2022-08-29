import React, { Component } from 'react'
import Service from '../services/Service'

class ListContractsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                contacts: []
        }
        this.addContract = this.addContract.bind(this);
       
    }

  
   

    componentDidMount(){
        Service.getContracts().then((res) => {
            this.setState({ contacts: res.data});
        });
    }

    addContract(){
        this.props.history.push('/add-contract/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Contracts List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addContract}> Add Contract</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th> Nom</th>
                                    <th> Address</th>
                                    <th> Pays</th>
                                    <th>Ville</th>
                                    <th>Telephone</th>
                                    <th>Debut de Contract</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.contacts.map(
                                        ct => 
                                        <tr key = {ct.id}>
                                            <td>{ct.id}</td>
                                             <td> { ct.nom} </td>   
                                             <td> {ct.address}</td>
                                             <td> {ct.pays}</td>
                                             <td> {ct.ville}</td>
                                             <td> {ct.telephone}</td>
                                             <td> {ct.debutContract}</td>
                                             
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListContractsComponent
