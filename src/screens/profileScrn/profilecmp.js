import './profilecmp.css';

function ProfileCMP() {
  return (
    <div className="prfl">
      <Picture />
      <Name />
      <div id="symbol">`T`</div>
      <Points />
    </div>
  );
}

function Picture() {
  return (
    <div id="pictureContainer">
      <img
        id="pic"
        src={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        }
      />
    </div>
  );
}

function Name() {
  return <div id="name">Name</div>;
}

function Points() {
  return <div id="points">12,000</div>;
}

export default ProfileCMP;
