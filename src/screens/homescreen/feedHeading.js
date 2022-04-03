import './feedHeading.css';
import feed from './feed.gif';

let showing = [
  { feed: <NewsfeedHead />, state: true, ID: 1 },
  { feed: <StoreHead />, state: false, ID: 2 }
];

function Heading() {
  return showing.map((item) => {
    if (item.state == true) {
      return (
        <div className="heading" key={item.ID}>
          {item.feed}
        </div>
      );
    }
  });
}

function NewsfeedHead() {
  return (
    <div>
      <div className="title">
        Feed
        <img src={feed} className="feedGif" />
      </div>
    </div>
  );
}

function StoreHead() {
  return (
    <div>
      <h1 className="title">STORE</h1>
    </div>
  );
}

export default Heading;
