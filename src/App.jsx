import reactImg from "../src/assets/react-core-concepts.png";
const reactDescriptions = [
  `Fundamental`,
  `Crucial`,
  `Core`,
  `Essential`,
  `Clear`,
  "Great",
];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const Header = () => {
  let description =
    reactDescriptions[genRandomInt(reactDescriptions.length - 1)];
  console.log(reactImg);
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description}
        React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
};

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
