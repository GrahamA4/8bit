import './App.css';

import Heading from './screens/homescreen/feedHeading';
import ProfileCMP from './screens/profileScrn/profilecmp';
import NewsfeedCMP from './screens/homescreen/newsfeed/newsfeedcmp';
import FriendsHeading from './screens/friendScrn/friendsHeading';
import FriendsCMP from './screens/friendScrn/friendsCMP/friendscmp';
function App() {
  return (
    <div>
      <SignedIn />
    </div>
  );
}

function SignedIn() {
  return (
    <div className="App">
      <div className="table">
        <ProfileCMP />
      </div>
      <div className="one">
        <Heading />
        <NewsfeedCMP />
      </div>
      <div className="two">
        <FriendsHeading />
        <FriendsCMP />
      </div>
    </div>
  );
}

function SignUp() {
  return (
    <div className="App">
      <div className="table"></div>
      <div className="one"></div>
      <div className="two"></div>
    </div>
  );
}

export default App;
