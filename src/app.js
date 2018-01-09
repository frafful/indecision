console.log("App.js is running.");

var template = (
    <div>
        <h1>This is JSX from app.js</h1>
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Felipe Rafful</h1>
        <p>Age: 29</p>
        <p>Location: Campinas, SP</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);