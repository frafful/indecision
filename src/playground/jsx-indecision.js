console.log("App.js is running.");

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderPage();
    }
}


const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
};

const clearOptions = () => {
    app.options = [];
    renderPage();
};

const appRoot = document.getElementById('app');

const renderPage = () => {

    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>} 
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options' }</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={clearOptions}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderPage();