//router
import IndexRouters from './router/index';
import axios from 'axios';
import header from './auth/auth';
import React, { useState } from 'react';

//scss
import './assets/scss/socialv.scss';
import { FeedProvider } from './context/feedContext';

const baseURL = 'https://api-test.sworks.io/post/feed';

function App() {
  const [feedArr, setFeedArr] = useState([]);

  React.useEffect(() => {
    axios({
      method: 'get',
      url: baseURL,
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone',
      },
      headers: {
        ...header,
      },
    }).then((response) => {
      console.log(response.data.result);
      setFeedArr(response.data.result.feeds);
    });
  }, []);

  return (
    <div className="App">
      <FeedProvider feeds={feedArr}>
        <IndexRouters />
      </FeedProvider>
    </div>
  );
}

export default App;
