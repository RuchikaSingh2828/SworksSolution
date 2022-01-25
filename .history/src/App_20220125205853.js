//router
import IndexRouters from './router/index';
import axios from 'axios';
import header from './auth/auth';
import React from 'react';

//scss
import './assets/scss/socialv.scss';
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
      debugger;
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
