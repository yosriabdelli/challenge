import { Component } from "react";
import myPencil from "../pencil.png";
class List extends Component{
    state = {
        checked : false
    }
    state = {
        myTextValue : "",
    }
    
todos = [{
        id:0,
        name:'Yosri Abdelli'
    },
    {
        id:1,
        name:'Sami Abdelli'
    },
    {
        id:2,
        name:'Aymen Abdelli'
    }   
]
/* Verifier Checkbox */
handleCheck = () => {
    this.setState({
        checked : !this.state.checked
    })
}

/* Recuperer value */
textAdd = (e) => {
    this.setState({
        myTextValue : e.target.value,
    })
}
/* End Recuperer value */


/* Ajouter valeur */
onClickButton (e) {
    e.preventDefault();
}

/* End Ajouter valeur */


/* Edit texte */


/* End Edit texte */


/* Delete texte */

/* End Delete texte */


    render(){
        return(
            <div className="centrer">
                <h1>Challenge</h1>
                <form>
                    <input type="text" value={this.state.value} onChange={this.textAdd} placeholder='Ajouter texte'/>

                    <button className="visiblity-btn" onClick={this.onClickButton}>Ajouter</button>

                </form>
                
                <ul className="list">
                    {this.todos.map((el,i) => (
                        <li key={i}> {el.name}
                            <div>
                                <button className="visiblity-btn" onClick={this.editTodos}><img src={myPencil}/></button>
                                <input type="checkbox" onClick={this.handleCheck} defaultChecked={this.state.Checked}/>
                            </div>
                        </li>
                    ))}
                    
                </ul>
            </div>
        )
    }
}
export default List;