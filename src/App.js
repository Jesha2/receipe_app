import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen"
 import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          {/* <Route index="true" element={<HomeScreen />} /> */}
          {/* <Route index element={<HomeScreen />} /> */}
          {/* these are the shortcuts for the path="/". path becomes annoying when you have a lot of nesting paths*/}
           <Route path="/" element={<HomeScreen />} />
          <Route path="newRecipe" element={<NewRecipeScreen />} />
          <Route path="recipe/:id" element={<DetailScreen />} />

        </Routes>
      </main>


      <Footer />
    </div>
  );
}

export default App;
