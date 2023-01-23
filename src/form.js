import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      Name: "",
      Age: "",
      City: "",
      isEdit: false, //
    };
  }
  infoChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };
  consoles = (event) => {
    if (!this.state.isEdit) {
      //post
      let data = {
        isEdit: this.state.isEdit, //false
        Name: this.state.Name,
        Age: this.state.Age,
        City: this.state.City,
      };

      this.props.mydata(data);
    } else {
      let data = {
        isEdit: this.state.isEdit, //true
        Name: this.state.Name,
        _id: this.state._id,
        Age: this.state.Age,
        City: this.state.City,
      };

      this.props.mydata(data);
    }
  };
  componentWillReceiveProps(props) {
    if (props.dft._id != null) {
      this.setState({
        isEdit: true,
        _id: props.dft._id,
        Name: props.dft.Name,
        Age: props.dft.Age,
        City: props.dft.City,
      });
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.consoles}>
          <div className="mb-3 mt-3">
            <label htmlFor="Name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              placeholder="Enter Name"
              name="Name"
              onChange={this.infoChange}
              value={this.state.Name}
            />
          </div>

          <div hidden={!this.state.isEdit} className="mb-3">
            <label htmlFor="_id" className="form-label">
              ID
            </label>
            <input
              type="text"
              hidden={!this.state.isEdit}
              className="form-control"
              id="_id"
              placeholder="Enter id"
              name="_id"
              onChange={this.infoChange}
              value={this.state._id}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Age" className="form-label">
              Age
            </label>
            <input
              type="text"
              className="form-control"
              id="Age"
              placeholder="Enter Age"
              name="Age"
              onChange={this.infoChange}
              value={this.state.Age}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="City" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="City"
              placeholder="Enter City"
              name="City"
              onChange={this.infoChange}
              value={this.state.City}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {this.state.isEdit ? "update" : "create"}
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
