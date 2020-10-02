import React, {Component, Fragment} from 'react';
import axios from 'axios';


export default class TacoList extends Component{

    state = {
        tacos: [],
        currentTaco: {},

    }

    selectedValue= 'active'

    tacoClick = id => {

            console.log(id);
            axios.get(`http://localhost:5000/${id}`)
            .then(response => response.data)
            .then(taco => this.props.history.push({pathname: '/edittaco', state:{tacoId: taco.id} }));
    }

    /*deleteTaco= id =>{
        axios.delete(`http://localhost:5000/${id}`)
        .then(data => window.location.reload());
          
    } */

    modificarTaco = id => {
        axios.post(`http://localhost:5000/${id}`)
        .then(data => console.log("Modificar"));
    }

    onSelect = event=> event.target.className =  `list-group-item ${this.selectedValue}`;
    onDeselect = event=> event.target.className= `list-group-item`;
    componentDidMount(){
        this.watchCode();
    }

    watchCode = ()=> setTimeout(()=>{
        axios.get('http://localhost:5000')
        .then(reponse => reponse.data)
        .then(tacos => {
            //console.log(tacos);
            this.setState({tacos: tacos.map(taco =>{
                return <li className={`list-group-item`}  key={taco.id} onClick={()=>this.tacoClick(taco.id)}
                onMouseOver={this.onSelect} onMouseOut={this.onDeselect} > 
                    Nombre del taco: {taco.name}<br></br>
                    Cantidad: {taco.quantity}<br></br>
                    Pica: {taco.pica}<br></br><br></br>
                    {/*<button onClick={()=>this.deleteTaco(taco.id)} className="btn btn-danger">Eliminar X</button> <span></span>
                    <button onClick={()=>this.modificarTaco(taco.id)} className="btn btn-dark">Modificar</button> */}
                    
                </li>
                
            })})
        });
        this.watchCode();
    }, 1000)

    render() {

        return (
            <Fragment>

                <ul style={{
                    cursor:'pointer'
                    }} className='list-group'>
                {this.state.tacos}
                </ul>
   
            </Fragment>
            

        );
    }
}

