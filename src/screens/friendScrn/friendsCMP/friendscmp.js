import './friendscmp.css';

function FriendsCMP() {
  return (
    <div className="friends">
      <PlaceHolder />
      <FriendsList />
    </div>
  );
}

function FriendsHeading() {
  return <div className="friendsHeading"></div>;
}

function FriendsList() {
  return (
    <ul className="friendsList">
      <li>1</li>
    </ul>
  );
}

function PlaceHolder() {
  return <div className="placeHolder">2</div>;
}

export default FriendsCMP;
