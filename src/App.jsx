
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from './components/Dashboard';
import './App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' exact
          element={<Dashboard/>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App
