import "../Style/app.scss";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </>
  );
}

export default App;
