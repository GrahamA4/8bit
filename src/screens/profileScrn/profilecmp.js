import './profilecmp.css';

function Profilecmp() {
  return (
    <div className="prflcmp">
      <Picture />
      <Name />
      <div id="symbol">'T'</div>
      <Points />
    </div>
  );
}

function Picture() {
  return (
    <div id="picturecmp">
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
  return <div id="namecmp">name</div>;
}

function Points() {
  return <div id="pointscmp">points</div>;
}

export default Profilecmp;
