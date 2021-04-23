import React, {Component} from 'react'
import data from './data'
import Slides from './Slides'
import Header from './Header'


class SlidesList extends Component{
    constructor(props){
        super(props)
        this.state = {
            people: data,
            index: 0,
        }
        this.changeDisplayIndex = this.changeDisplayIndex.bind(this)
  
     
    }


changeDisplayIndex(index){
    this.setState({index: +1})
}
 
 


render(){
return(
    <div className="SlidesList"> 
        <Header/> 
        {this.state.people.map((element)=>{
            return (
                <Slides
                people={element}
                tired={this.changeSomething}
                />)
            })}
    </div>
    )
  }


}




export default SlidesList