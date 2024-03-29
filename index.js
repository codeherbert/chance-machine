class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className="name">Chance Machine!</h1>
                <Machine 
                    s1="🍒"
                    s2="🍒"
                    s3="🍒"
                />
                <Machine 
                    s1="🍒"
                    s2="🍒"
                    s3="🍊"
                />
                <Machine 
                    s1="🍊"
                    s2="🍓"
                    s3="🍒"
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

