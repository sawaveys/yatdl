import logo from './logo.svg';
import './App.css';
import Input from './components/input.js'
import Button from './components/button.js'

function App() {
    return ( < div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / > < Input / > < Button / >
        <
        a className = "App-link"
        href = "https:/ / reactjs.org "
        target = "_blank "
        rel = "noopener noreferrer " >
        Learn React < /a> </header > < /div>
    );
}

export default App;