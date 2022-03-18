import "./styles.css";

export default function App() {
  return (
    <div className="App">
      < Header name="Billy's" />
      < Main adjective='Amazing' />
      < Footer year={(new Date().getFullYear())} />
    </div>
  );
}


function Header(props){
  console.log(props)
  return (
  <header>
    <h1>{props.name} Pet Store</h1>
  </header>
  )};


function Main(props) {
  return (
    <section> 
    <h3>{props.adjective} Puppies in Town</h3>
    </section>
  )
};

function Footer(props){
  return (
    <footer>
      <h3>Get'em before they are gone in {props.year}</h3>
    </footer>
    )
}

const breeds = ['Pit Bull','Rotwiler', 'German Shepherd', 'Miniture Schauzer']
{props.breeds.map(breed) => console.log(breed));}