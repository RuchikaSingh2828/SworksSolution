//router
import IndexRouters from './router/index';
import axios from 'axios';
import header from './auth/auth';
import React from 'react';

//scss
import './assets/scss/socialv.scss';
import { FeedProvider } from './views/dashboard/context/feedContext';
const baseURL = 'https://api-test.sworks.io/post/feed';

function App() {
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
      console.log(response.data);
    });
  }, []);

  return (
    <div className="App">
      <FeedProvider>
        <IndexRouters />
      </FeedProvider>
    </div>
  );
}

export default App;
