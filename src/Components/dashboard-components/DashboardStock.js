import React from "react";

const stockList = [];

function DashboardStock(props) {
  return (
    <div className="stock-container">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Symbol</th>
            <th scope="col"></th>
            <th scope="col">Stock</th>
            <th scope="col">Market</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <img src="/images/microsoft.png" alt="" />{" "}
            </th>
            <td> Microsoft</td>
            <td>
              {/* {props.infoStock && props.infoStock["Global Quote"]["05. price"]} */}
              500.00
            </td>
            <td>
              {" "}
              {/* {props.infoStock1 &&
                props.infoStock1["Global Quote"]["10. change percent"]} */}
              5%
            </td>
          </tr>
          <tr>
            <th scope="row">
              {" "}
              <img src="/images/tesla.png" alt="" />
            </th>
            <td> Tesla</td>
            <td>
              {/* {" "}
              {props.infoStock1 &&
                props.infoStock1["Global Quote"]["05. price"]} */}
              500.00
            </td>
            <td>
              {/* {" "}
              {props.infoStock1 &&
                props.infoStock1["Global Quote"]["10. change percent"]} */}
              5%
            </td>
          </tr>
          <tr>
            <th scope="row">
              {" "}
              <img src="/images/ibm.png" alt="" />
            </th>
            <td>IBM</td>
            <td>
              {/* {" "}
              {props.infoStock3 &&
                props.infoStock3["Global Quote"]["05. price"]} */}
              500.00
            </td>
            <td>
              {/* {" "}
              {props.infoStock3 &&
                props.infoStock3["Global Quote"]["10. change percent"]} */}
              5%
            </td>
          </tr>
          <tr>
            <th scope="row">
              {" "}
              <img src="/images/nike.png" alt="" />
            </th>
            <td> Nike</td>
            <td>
              {/* {props.infoStock2 &&
                props.infoStock2["Global Quote"]["05. price"]} */}
              500.00
            </td>
            <td>
              {/* {props.infoStock2 &&
                props.infoStock2["Global Quote"]["10. change percent"]} */}
              5%
            </td>
          </tr>
        </tbody>
      </table>
      <select name="" id="">
        <option value="">Month</option>
        <option value="">Feb.</option>
      </select>
    </div>
  );
}

export default DashboardStock;
