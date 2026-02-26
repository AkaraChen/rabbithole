import Masonry from 'react-masonry-css';
import { Tweet } from 'react-tweet';
import 'react-tweet/theme.css';
import './App.css';
import tweetIds from './data.json';

const App = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry"
      columnClassName="masonry-column"
    >
      {tweetIds.map((id) => (
        <div key={id} className="tweet-card">
          <Tweet id={id} />
        </div>
      ))}
    </Masonry>
  );
};

export default App;
