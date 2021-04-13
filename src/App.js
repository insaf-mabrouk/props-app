
import './App.css';
import me from './me.jpg';
import Profile from './profile/Profile';

function App() {
  const handleAlert =(name) =>{
    alert(`Hi, I am ${name}`)
    }
    
  return (
    <div className="App">
      <Profile
      fullName = "Ennsaf Mabrouk"
      bio="I'm a wife and a mother of two cutes"
      profession="Full stack JS developer"
      handleAlert={handleAlert}
      />
       
      <img src={me} style={{height: 350, width: 300, borderRadius: 250}}></img>
    </div>
  );
}

export default App;
