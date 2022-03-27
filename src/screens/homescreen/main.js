import './main.css';

let showing = [
  { feed: <Newsfeed />, state: true, ID: 1 },
  { feed: <Store />, state: false, ID: 2 }
];

function Main() {
  return showing.map((item) => {
    if (item.state == true) {
      return (
        <div className="mainComp" key={item.ID}>
          {item.feed}
        </div>
      );
    }
  });
}

function Newsfeed() {
  return (
    <div className="newsfeed">
      <h1>NEWS FEED</h1>
    </div>
  );
}

function Store() {
  return (
    <div className="storeComp">
      <h1>STORE</h1>
    </div>
  );
}

export default Main;
