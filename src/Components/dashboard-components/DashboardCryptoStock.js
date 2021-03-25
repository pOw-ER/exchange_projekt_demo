import React from "react";

function DashboardCryptoStock(props) {
  // console.log(props.info1);

  let color = "";
  // let percentage = (
  //   Number(
  //     props.info1["Time Series (Digital Currency Daily)"]["2021-03-23"][
  //       "4b. close (USD)"
  //     ]
  //   ) /
  //     Number(
  //       props.info1["Time Series (Digital Currency Daily)"]["2021-03-22"][
  //         "1b. open (USD)"
  //       ]
  //     ) -
  //   1
  // ).toFixed(2);

  // if (percentage >= 0) {
  //   color = "green";
  // } else {
  //   color = "red";
  // }

  return (
    <div className="crypto-container">
      {/* <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Change(24h)</th>
        </tr>

        <tr>
          <td>{props.info1["Meta Data"]["2. Digital Currency Code"]} </td>
          <td>
            {
              props.info1["Time Series (Digital Currency Daily)"]["2021-03-22"][
                "4b. close (USD)"
              ]
            }
          </td>
          <td style={{ color: `${color}` }}>
            {" "}
            {(
              Number(
                props.info1["Time Series (Digital Currency Daily)"][
                  "2021-03-22"
                ]["4b. close (USD)"]
              ) /
                Number(
                  props.info1["Time Series (Digital Currency Daily)"][
                    "2021-03-22"
                  ]["1b. open (USD)"]
                ) -
              1
            ).toFixed(2)}
            %
          </td>
        </tr>
      </table> */}
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              {" "}
              <img src="/images/btc.png" alt="" />{" "}
            </th>
            <td> Bitcoin</td>
            <td>
              {props.infoCrypto &&
                props.infoCrypto["Time Series (Digital Currency Monthly)"][
                  "2021-03-25"
                ]["4b. close (USD)"]}
            </td>
            <td>
              {/* {(
                props.infoCrypto &&
                Number(
                  props.infoCrypto["Time Series (Digital Currency Monthly)"][
                    "2021-03-24"
                  ]["4b. close (USD)"]
                ) /
                  Number(
                    props.infoCrypto["Time Series (Digital Currency Monthly)"][
                      "2021-03-24"
                    ]["1b. open (USD)"]
                  ) -
                  1
              ).toFixed(2)} */}
              0.05%
            </td>
          </tr>
          <tr>
            <th scope="row">
              <img src="/images/eth.png" alt="" />
            </th>
            <td> Etherium</td>
            <td>
              {/* {props.infoCrypto1 &&
                props.infoCrypto1["Time Series (Digital Currency Monthly)"][
                  "2021-03-24"
                ]["4b. close (USD)"]} */}
              500.00
            </td>
            <td>
              {/* {(
                props.infoCrypto &&
                Number(
                  props.infoCrypto1["Time Series (Digital Currency Monthly)"][
                    "2021-03-24"
                  ]["4b. close (USD)"]
                ) /
                  Number(
                    props.infoCrypto1["Time Series (Digital Currency Monthly)"][
                      "2021-03-24"
                    ]["1b. open (USD)"]
                  ) -
                  1
              ).toFixed(2)} */}
              0.05%
            </td>
          </tr>
          <tr>
            <th scope="row">
              <img src="/images/binance1.png" alt="" />
            </th>
            <td>Binance</td>
            <td>
              {/* {props.infoCrypto2 &&
                props.infoCrypto2["Time Series (Digital Currency Monthly)"][
                  "2021-03-24"
                ]["4b. close (USD)"]} */}
              500.00
            </td>
            <td>
              {/* {(
                props.infoCrypto2 &&
                Number(
                  props.infoCrypto2["Time Series (Digital Currency Monthly)"][
                    "2021-03-24"
                  ]["4b. close (USD)"]
                ) /
                  Number(
                    props.infoCrypto2["Time Series (Digital Currency Monthly)"][
                      "2021-03-24"
                    ]["1b. open (USD)"]
                  ) -
                  1
              ).toFixed(2)} */}
              0.05%
            </td>
          </tr>
          <tr>
            <th scope="row">
              <img src="/images/ripple.png" alt="" />
            </th>
            <td> Ripple</td>
            <td>
              {/* {props.infoCrypto3 &&
                props.infoCrypto3["Time Series (Digital Currency Monthly)"][
                  "2021-03-24"
                ]["4b. close (USD)"]} */}
              500.00
            </td>
            <td>
              {/* {(
                props.infoCrypto3 &&
                Number(
                  props.infoCrypto3["Time Series (Digital Currency Monthly)"][
                    "2021-03-24"
                  ]["4b. close (USD)"]
                ) /
                  Number(
                    props.infoCrypto3["Time Series (Digital Currency Monthly)"][
                      "2021-03-24"
                    ]["1b. open (USD)"]
                  ) -
                  1
              ).toFixed(2)} */}
              0.05%
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

export default DashboardCryptoStock;
