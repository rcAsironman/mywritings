import './App.css';
import NavigationBar from './components/NavigationBar';

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import MainScreen from './screens/MainScreen';
function App() {
  return (
    <div className="App">
      <NavigationBar/>
        <MainScreen/>
    </div>
  );
}

export default App;
