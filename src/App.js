import './App.css';
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home/Home';
import TemplateContainer from './components/templates/TemplateContainer';

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route exact path="/" element={<Navigate replace to="/home" />} />
          <Route exact path="/homepage" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<TemplateContainer />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
