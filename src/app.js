import invock, {Component} from "invock-js";

class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return `
            <desktop>
                <div id="app" class="theme-bleu">
                    <div class="background box30 shadow">
                        <div class="box10">
                            <h1>It Worked!</h1>
                        </div>
                        
                        <p>Welcome to invock-js Framework :)</p>
                    </div>
                </div>
            </desktop>
            <mobile>
                <div id="app" class="theme-violet">
                    <div class="background box30 shadow">
                        <div class="box10">
                            <h1>It Worked!</h1>
                        </div>
                        
                        <p>Welcome to invock-js Framework :)</p>
                    </div>
                </div>
            </mobile>
        `;
    }
}

invock.export("App", App);
invock.mount({ parent : "#container", root : "{% App %}" });