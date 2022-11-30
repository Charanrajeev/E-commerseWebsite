import { Component } from "react";
import './Form.css'
class Form extends Component{
    render(){
        return(
            <div className=" marginform conatiner">
                <form>
  <div className="form-group">
    <label>Product Name</label>
    <input type="name" onChange={this.props.onChangeHandler} className="form-control" name="product"/>
  </div>
  <div className="form-group">
    <label>Price</label>
    <input type="number" onChange={this.props.onChangeHandler} className="form-control" name="price"/>
  </div>
  
  <button type="submit" onClick={this.props.onSubmitHandler} className="btn btn-primary">Submit</button>
</form>
            </div>
        )
    }
}
export default Form