import React, {Component} from "react"
import "./SearchBar.css"
import IconSearch from "./search_icon.js"

class SearchBar extends Component{
    
    state = {
        closed: true,
        transition: false,
        value:""
    }

    Search = async (e) =>{
        e.preventDefault()  

        if(this.state.closed){
            this.setState({transition:true})
            this.setState({closed:false})
            setTimeout(()=>this.setState({transition:false}),500)
        }else{
            if(this.state.value){
                this.props.searchHandler(this.state.value)
            }
            this.setState({transition:true})
            this.setState({closed:true})
            setTimeout(()=>this.setState({transition:false,value:""}),500)
        }
    }

    render(){
        return(
            <div className="SearchBar">
                <form onSubmit={this.Search} className={`search_bar 
                                                    ${this.state.closed?'closed':'opened'}
                                                    ${this.state.transition?'animation':'stoped'}`}>
                    <input type="text" name="in" placeholder={this.props.placeholder}
                            className={`${this.state.closed?'invisible':'visible'}`}
                            value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})}/>
                    <button>
                        <IconSearch/>
                    </button>
                </form>
            </div>
        )
    }
}

export default SearchBar