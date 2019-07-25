import React from 'react'
import axios from 'axios';


class Pokemon extends React.Component{

    constructor(props){
        super(props)
        this.state={
            thePokemon: {},
        }
    }

    componentDidMount(){
        this.fetchPokemon(this.props.match.params.numToSearch);
    }

    shouldComponentUpdate(nextProps, nextState){
        this.fetchPokemon(nextProps.match.params.numToSearch);

        return true;
    }



    fetchPokemon(numToSearch){


        axios.get('https://pokeapi.co/api/v2/pokemon/'+numToSearch)
        .then((response)=>{

            console.log(response.data)

            this.setState({thePokemon: response.data})

        })
        .catch(()=>{

        })
        
    }

    showThePokemon = () =>{
        return (
            <div>
                <h2>{this.state.thePokemon.name}</h2>

            {this.state.thePokemon.sprites &&
                <img src={this.state.thePokemon.sprites.front_default} />
            }

            </div>
        )
    }


    render(){
        return(
            <div>
            this is the pokemon component
            {this.showThePokemon()}
        </div>
    )
}
    




}

export default Pokemon;