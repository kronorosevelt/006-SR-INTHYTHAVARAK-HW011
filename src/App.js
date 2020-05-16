import React,{Component} from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
  constructor(){
      super();

      this.state = {
          result: ""
      }
  }
  
  calculate = () => {
    try {
        this.setState({
            // eslint-disable-next-line
            result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};

  render() {
      return (
          <div>
              <div className="calculator-body">
                  <h1> Calculator</h1>
                  <ResultComponent result={this.state.result}/>
                  <KeyPadComponent onClick={this.onClick}/>
              </div>
          </div>
      );
  }
}
onclick = button => {

  if(button === "calculate"){
      this.calculate()
  } else {
    this.setState({
        result: this.state.result + button
    })
}
};
export default App;
 