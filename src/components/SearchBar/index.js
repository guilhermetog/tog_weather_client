import React from 'react'
import s from './SearchBar.less'

class SearchBar extends React.Component{
    state={
      opened:false,
      in:"",
      onTransition: false,
    }
    
    transition =()=>{
      this.setState({onTransition: true })
      setTimeout(()=>{
            this.setState({onTransition: false})
      },1000)
    }
  
    switch=(e)=>{
      e.preventDefault()
      this.transition()
      if(this.state.opened && this.state.in){
        this.props.searchHandler(this.state.in)
      }
      this.setState({
        opened: !this.state.opened,
        in:""
      })
    }
    
    render(){
      return(
       <form className={`${s.search_container} ${s.left}`} onSubmit={this.switch}>
         <div className={`${s.search_bar} ${this.state.onTransition && s.transition} 
                                          ${this.state.opened? s.opened:s.closed}`}>
           {this.state.opened &&
              <input className={`${s.search_input} ${this.state.onTransition && s.hidden}`} 
                     placeholder="Search..."
                     value={this.state.value} 
                     onChange={(e)=>this.setState({in:e.target.value})}/>
           }
           <button type="submit" className={s.btn_search}>
              <i className="fas fa-search"></i>
           </button>
         </div>
       </form>
      )
    }
  }
  
  export default SearchBar