import invock, {Component} from "invock-js";

class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return `
            <desktop>
                <div id="app">
                    <div class="background">
                        <h1>It Worked!</h1>
                        <p>Welcome to invock-js Framework :)</p>
                    </div>
                </div>
            </desktop>
            <mobile>
                <div class="background-mobile">
                    <h1>It Worked!</h1>
                    <p>Welcome to invock-js Framework :)</p>
                </div>
            </mobile>
        `;
    }
}

invock.export("App", App);
invock.mount({ parent : "#container", root : "{% App %}" });