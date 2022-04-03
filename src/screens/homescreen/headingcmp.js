import './headingcmp.css';

let showing = [
  { feed: <NewsfeedHead />, state: true, ID: 1 },
  { feed: <StoreHead />, state: false, ID: 2 }
];

function HeadingCMP() {
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
      <h1 className="title">NEWS FEED</h1>
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

export default HeadingCMP;
