import './App.css';
import HeadingCMP from './screens/homescreen/headingcmp.js';
import ProfileCMP from './screens/profileScrn/profilecmp';
import NewsfeedCMP from './screens/homescreen/newsfeed/newsfeedcmp';
function App() {
  return (
    <div className="App">
      <div className="table">
        <ProfileCMP />
      </div>
      <div className="one">
        <HeadingCMP />
        <NewsfeedCMP />
      </div>
      <div className="two"></div>
    </div>
  );
}

export default App;
