import React from 'react'
class Table extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    
    render(){
        return(
            <table className="table">
            
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {
                this.props.val.length>0?
                (
                this.props.val.map(e=>{
                   return <tr key={e._id}>
                        <td>{e.Name}</td>
                        <td>{e.Age}</td>
                        <td>{e.City}</td>
                        {/* <td>{e._id}</td> */}
                        <td>{<button className="btn btn-primary" onClick={event => this.props.dft(e)}>Edit</button>}</td>
                        <td>{<button className="btn btn-primary" onClick={event => this.props.deld(e)}>Delete</button>}</td>
                    </tr>
                })    
                )
                :
                (
                    <tr>
                        <td>no data</td>
                    </tr>
                )

            }
              
              
            </tbody>
          </table>

        )
    }
}

export default Table