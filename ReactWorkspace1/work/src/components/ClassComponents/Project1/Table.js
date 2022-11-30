import { Component } from "react";
class Table extends Component {
  constructor(props) {
    super(props)
    console.log("from table:", this.props.list)
  }
  render() {
    return (
      <div className="margin container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.list.map((obj,index) => (
                <>
                  <tr key={obj.id}>
                    <th scope="row">{index+1}</th>
                    <td>{obj.product}</td>
                    <td>{obj.price}</td>
                  </tr>
                </>
              ))
            }
          </tbody>
        </table>

      </div>
    )
  }
}
export default Table;