import Header from "../Header/Header";
import Home1 from "./Home1/Home1";
import Home2 from "./Home2/Home2";

function Home() {
  return (
    <>
      <Header />

      <main id="main-content">
        <Home1 />
        <Home2 />
      </main>
    </>
  );
}

export default Home;