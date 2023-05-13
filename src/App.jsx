import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Training App Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/new-task" element={<TaskForm />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
