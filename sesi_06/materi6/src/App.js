
function Header() {
    return (
        <header className="header">
            <h1>My First React App</h1>
        </header>
    );
}

function Content() {
    return (
        <div className="content">
            <p>
                Ini merupakan kalimat paragraf yang ingin saya tampilkan dalam
                web
            </p>
        </div>
    );
}

function Footer() {
    return (
        <div className="footer">
            <p>&copy; Fasich-2022</p>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <hr />
            <Content />
            <hr />
            <Footer />
        </div>
    );
}

export default App;
