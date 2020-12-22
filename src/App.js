
import './App.css';
import Profile from './Profile/Profile';
import PropTypes from "prop-types";


const fullName = 'Haroun Bayoudh' ;
const bio = 'Cool ';
const profession = ' Startup FullStack  Developper';
const alertName = alert('Haroun Bayoudh');

function App() {
  return (
    <div className="App">
      <div>
        <Profile fullName={fullName} bio={bio} profession={profession} alertName={alertName} /><img src="./Me.jpg" alt="me" /><Profile />
      </div>

    </div>
  );
}
Profile.proTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,

};

export default App;
