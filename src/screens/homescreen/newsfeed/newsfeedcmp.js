import './newsfeedcmp.css';

function NewsfeedCMP() {
  return (
    <div className="newsfeed">
      <Reels />
      <News />
    </div>
  );
}

function News() {
  return <div className="news"></div>;
}

function Reels() {
  return <div className="reels"></div>;
}

export default NewsfeedCMP;
