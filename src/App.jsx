import reactImg from "../src/assets/react-core-concepts.png";
// we have to import this Image this way since it is stored in the src/assets folder
// Images in this folder get optimized and bundled with different paths
// This will enable the image to be rendered on deployment, as vite will keep track of the rlevant path on deployment.
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
  console.log(description);
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description + " "}
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
