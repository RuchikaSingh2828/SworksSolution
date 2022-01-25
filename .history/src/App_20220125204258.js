//router
import IndexRouters from './router/index';
import axios from 'axios';
import header from './auth/auth';
import React from 'react';

//scss
import './assets/scss/socialv.scss';
const baseURL =
  'https://api-test.sworks.io/post/feed?skip=0&limit=1&count=true&sort=random';

function App() {
  React.useEffect(() => {
    axios
      .get(`${baseURL}`, {
        headers: {
          ...header,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return (
    <div className="App">
      <IndexRouters />
    </div>
  );
}

export default App;
