import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import CharacterDetailed from "./components/CharacterDetailed";
import Header from "./components/Header";
import WrongApproachPage from "./components/WrongApproachPage";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
        <Route path="/" element={<CharacterList />}></Route>
        <Route path="/characterdetailed/:id" element={<CharacterDetailed />}></Route>
        <Route element={<WrongApproachPage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
