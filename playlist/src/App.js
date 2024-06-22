import { Fragment } from "react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Playlist } from "./components/Playlist";

function App() {
  return (
    <Fragment>
      <Nav />
      <Playlist />
      <Footer />
    </Fragment>
  );
}

export default App;
