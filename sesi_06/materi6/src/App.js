function Header(){
  return(
    <header className="header">
      <h1>My First React App</h1>
    </header>
  )
}

function Content(){
  return(
    <header className="content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra. Vestibulum rhoncus est pellentesque elit. Cras adipiscing enim eu turpis. Ultrices vitae auctor eu augue ut. Id faucibus nisl tincidunt eget. Neque volutpat ac tincidunt vitae semper quis. Porttitor rhoncus dolor purus non enim praesent elementum. Mattis pellentesque id nibh tortor id aliquet lectus. Neque viverra justo nec ultrices dui.</p>
    </header>
  )
}

function Footer(){
  return(
    <header className="footer">
      <p>&copy; Fasich-2022</p>
    </header>
  )
}

function App() {
  return (
    <div className="container">
      <Header/>
      <hr/>
      <Content/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
