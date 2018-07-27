import invock, {Component} from "invock-js";

class App extends Component {
    render() {
        return `
            <desktop>
                <div id="app">
                    <h1>It Worked!</h1>
                    <p>Welcome to invock-js Framework :)</p>
                </div>
            </desktop>
            <mobile>
                <h1>Mobile</h1>
            </mobile>
        `;
    }
}

invock.export("App", App);
invock.mount({ parent : "#container", root : "{% App %}" });