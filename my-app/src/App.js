import Profile from './profile/Profile';
import './App.css';

function App() {
  const handleName = (name) => alert(`Profile user name is ${name}`);

  return (
    <div className="App">
      <Profile fullName="MOHAMED BEN HALIMA" bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis eget ipsum bibendum congue. Curabitur commodo finibus nulla id commodo. Pellentesque in tortor et velit commodo convallis. Nam pretium commodo libero, vitae imperdiet ipsum placerat eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus ut est eu est sollicitudin faucibus. Vivamus ac orci vitae justo feugiat semper." profession="Web Developer" handleName={handleName}>
        <img src='./profile' alt="Profile" style={{ width: "50%" }} />
      </Profile>
    </div>
  );
}

export default App;

