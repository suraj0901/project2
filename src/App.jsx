import { useState } from "react";
import Favourite from "./component/FAV/Favourite";
import Header from "./component/Header";
import Home from "./component/HOME/Home";

const PAGE = {
  HOME: "home",
  FAVOURITE: "favourite",
};

function App() {
  const [page, setPage] = useState(PAGE.HOME);
  return (
    <div className="App">
      <Header onChangePage={setPage} current={page} menu={PAGE} />
      {page === PAGE.HOME && <Home />}
      {page === PAGE.FAVOURITE && <Favourite />}
    </div>
  );
}

export default App;
