import React from 'react';

//router
import { Switch, Route } from 'react-router';

//layoutpages
import Default from '../layouts/dashboard/default';

const IndexRouters = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Default}></Route>
      </Switch>
    </>
  );
};

export default IndexRouters;
