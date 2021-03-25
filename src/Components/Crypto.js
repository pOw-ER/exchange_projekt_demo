import React, { Component } from 'react'
import Plot from 'react-plotly.js';
import axios from 'axios'
import MY_API_KEY_CRYPTO from '../config'

class Crypto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCryptoName: 'BTC',
      secondCryptoName: 'ETH',
      thirdCryptoName: 'LTC',
      btcDataX: [],
      btcDataY: [],
      btcName: '',
      btcCode: '',
      ethDataX: [],
      ethDataY: [],
      ethName: '',
      ethCode: '',
      ltcDataX: [],
      ltcDataY: [],
      ltcName: '',
      ltcCode: '',
      markt: '',
      inputValue: '',
      searchCrName: '',
      searchCrCode: '',
      searchCrMarkt: '',
      searchCrDataX: [],
      searchCrDataY: [],
    }
  }

  componentDidMount() {

    let btcDataX_1 = [];
    let btcDataY_1 = [];
    let ethDataX_1 = [];
    let ethDataY_1 = [];
    let ltcDataX_1 = [];
    let ltcDataY_1 = [];
    axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${this.state.firstCryptoName}&market=EUR&apikey=${MY_API_KEY_CRYPTO}`)
      .then(response => {
        // console.log(response.data["Meta Data"]["3. Information"]);
        // console.log(response.data);
        // console.log(response.data["Time Series (Digital Currency Monthly)"]["2021-03-23"]["4a. close (EUR)"]);
        // console.log(response.data["Meta Data"]);
        console.log(response);
        for (let key in response.data["Time Series (Digital Currency Monthly)"]) {
          btcDataX_1.push(key)
          btcDataY_1.push(response.data["Time Series (Digital Currency Monthly)"][key]["4a. close (EUR)"])
        }
        this.setState({
          btcDataX: btcDataX_1,
          btcDataY: btcDataY_1,
          btcName: response.data["Meta Data"]["3. Digital Currency Name"],
          btcCode: response.data["Meta Data"]["2. Digital Currency Code"],
          markt: response.data["Meta Data"]["5. Market Name"]
        });
      })

    axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${this.state.secondCryptoName}&market=EUR&apikey=${MY_API_KEY_CRYPTO}`)
      .then(response => {
        for (let key in response.data["Time Series (Digital Currency Monthly)"]) {
          ethDataX_1.push(key)
          ethDataY_1.push(response.data["Time Series (Digital Currency Monthly)"][key]["4a. close (EUR)"])
        }
        this.setState({
          ethDataX: ethDataX_1,
          ethDataY: ethDataY_1,
          ethName: response.data["Meta Data"]["3. Digital Currency Name"],
          ethCode: response.data["Meta Data"]["2. Digital Currency Code"]
        });
      })

    axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${this.state.thirdCryptoName}&market=EUR&apikey=${MY_API_KEY_CRYPTO}`)
      .then(response => {
        for (let key in response.data["Time Series (Digital Currency Monthly)"]) {
          ltcDataX_1.push(key)
          ltcDataY_1.push(response.data["Time Series (Digital Currency Monthly)"][key]["4a. close (EUR)"])
        }
        this.setState({
          ltcDataX: ltcDataX_1,
          ltcDataY: ltcDataY_1,
          ltcName: response.data["Meta Data"]["3. Digital Currency Name"],
          ltcCode: response.data["Meta Data"]["2. Digital Currency Code"]
        });
      })

  }
  // componentDidUpdate() {

  // }
  handleChangeCrypto = (event) => {
    this.setState({ inputValue: event.target.previousSibling.value }, () => {
      console.log(this.state.inputValue.toUpperCase());
      let searchCrDataX_1 = []
      let searchCrDataY_1 = []
      axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${this.state.inputValue.toUpperCase()}&market=EUR&apikey=${MY_API_KEY_CRYPTO}`)
        .then(response => {
          // console.log(response.data["Meta Data"]["3. Information"]);
          console.log(response.data);
          // console.log(response.data["Time Series (Digital Currency Monthly)"]["2021-03-23"]["4a. close (EUR)"]);
          console.log(response.data["Meta Data"]);
          for (let key in response.data["Time Series (Digital Currency Monthly)"]) {
            searchCrDataX_1.push(key)
            searchCrDataY_1.push(response.data["Time Series (Digital Currency Monthly)"][key]["4a. close (EUR)"])
          }
          this.setState({
            searchCrDataX: searchCrDataX_1,
            searchCrDataY: searchCrDataY_1,
            searchCrName: response.data["Meta Data"]["3. Digital Currency Name"],
            searchCrCode: response.data["Meta Data"]["2. Digital Currency Code"],
            searchCrMarkt: response.data["Meta Data"]["5. Market Name"]
          });
        })
    }
    );
  }


  render() {
    return (
      <section id="crypto">
        <form>
          <input type="search" placeholder="Currency Code" />
          <i onClick={this.handleChangeCrypto} className="fa fa-search"></i>
        </form>
        <div>
          <h1>Crypto</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facilis tempora mollitia autem tenetur, harum voluptatum ipsam delectus temporibus, molestiae magni id eum sed ipsa velit rem deleniti. Voluptatibus, labore!</p>
        </div>
        <article>
          {this.state.inputValue === '' ? <Plot
            data={[
              {
                x: this.state.btcDataX.slice(0, 15),
                y: this.state.btcDataY.slice(0, 15),
                type: 'scatter',
                mode: 'lines+markers',
                marker: {
                  color: '#ffa600',
                  size: 8
                },
                line: { shape: 'spline' },
                name: `${this.state.btcCode} (${this.state.btcName})`
              },
              {
                x: this.state.ethDataX.slice(0, 15),
                y: this.state.ethDataY.slice(0, 15),
                type: 'scatter',
                mode: 'lines+markers',
                marker: {
                  color: '#D346B1',
                  size: 8
                },
                line: { shape: 'spline' },
                name: `${this.state.ethCode} (${this.state.ethName})`
              },
              {
                x: this.state.ltcDataX.slice(0, 15),
                y: this.state.ltcDataY.slice(0, 15),
                type: 'scatter',
                mode: 'lines+markers',
                marker: {
                  color: '#1F8EF1',
                  size: 8
                },
                // 003f5c
                line: { shape: 'spline' },
                name: `${this.state.ltcCode} (${this.state.ltcName})`
              },
            ]}
            config={{ responsive: true }}
            layout={{
              // width: 1000, height: 400,
              autosize: true,
              font: { size: 14, color: '#F0F0F1' },
              title: 'Popular Crypto Compares : BTC - ETH - LTC', xaxis: {
                title: 'MONTH/YEAR'
              },
              yaxis: {
                title: this.state.markt
              }, plot_bgcolor: "#27293D ", paper_bgcolor: "#27293D ",

            }}
            useResizeHandler={true}
            style={{ width: "100%", height: "100%" }}

          /> : <Plot
            data={[
              {
                x: this.state.searchCrDataX.slice(0, 15),
                y: this.state.searchCrDataY.slice(0, 15),
                type: 'scatter',
                mode: 'lines+markers',
                marker: {
                  color: '#2CD6B4',
                  size: 8
                },
                line: { shape: 'spline' },
                name: `${this.state.searchCrCode} (${this.state.searchCrName})`
              }
            ]}
            layout={{
              width: 1000, height: 400, title: `Crypto: ${this.state.inputValue.toUpperCase()}`, xaxis: {
                title: 'MONTH/YEAR'
              },
              yaxis: {
                title: this.state.searchCrMarkt
              }, plot_bgcolor: "#27293D ", paper_bgcolor: "#27293D ",
            }}
          />}
        </article>


      </section>

    );
  }
}

export default Crypto;
