import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import CharacterDetailed from "./components/CharacterDetailed";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
        <Route path="/" element={<CharacterList />}></Route>
        <Route path="/characterdetailed/:id" element={<CharacterDetailed />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
