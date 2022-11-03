import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CoinPage from "./Pages/CoinPage";
import Homepage from "./Pages/Homepage";
import Alert from "./components/Alert";
import Footer from "./components/Footer";

const App = () => {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#000",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/coins/:id" element={<CoinPage />} />
          </Routes>
          <Footer />
        </div>
        <Alert />
      </BrowserRouter>
    </>
  );
};

export default App;
