import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Training App</h1>
      </div>
    </Provider>
  );
}

export default App;
