import React from 'react';
import Form from './form'
import Table from './table'
import axios from 'axios'
class App extends React.Component{
    constructor(){
        super();
        this.state={
            dff:[],
            dft:[]
        }
    }
//create   & update
    datafa=(data)=>
    {
        if(!data.isEdit){
            axios.post('http://localhost:3600/info',data)// to f
            .then(res=> this.getAll())
     
        }else{
            axios.put('http://localhost:3600/info',data)  //to t 
            .then(res=> this.getAll())
        }
        
          }
     
      
      
        
       

   componentDidMount(){
       this.getAll()
   }
//deletek
deld=(data)=>{
    let da = window.confirm(`do you want to delete ${data.Name}`)
    if(da){
    axios.delete(`http://localhost:3600/info/${data._id}`)
    .then(res=>{
        this.getAll()
        alert("success")
    })
}
}
   //read
     getAll=()=>{
         axios.get('http://localhost:3600/info')
         .then(res=>{
             this.setState({dff:res.data})
         })
     }

   dft=(data)=>{
    this.setState({dft:data})
   }
    render(){
        return(
             <div className='container'>
                 <div className='row'>
                     <div className="col-6">
                     <Form mydata={this.datafa} dft={this.state.dft}/>
  
                     </div>
                     <div className="col-6">
                     <Table val={this.state.dff} dft={this.dft} deld={this.deld}/>
                     </div>
                 </div>
             </div>
         
        )
    }
}

export default App;
