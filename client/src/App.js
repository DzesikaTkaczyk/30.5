import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
//import { IndexRoute } from 'react-router';

import MainLayout from './components/layout/MainLayout/MainLayout';
//routes
const Home = lazy(() => import('./components/pages/Home/HomePage'));
const Posts = lazy(() => import('./components/pages/Posts/PostsPage'));
const Contact = lazy(() => import('./components/pages/Contact/ContactPage'));
const NotFound = lazy(() => import('./components/pages/NotFound/NotFoundPage'));
const SinglePost = lazy(() => import('./components/pages/SinglePost/SinglePost'));
const NewPost = lazy(() => import('./components/pages/NewPost/NewPost'));

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Suspense fallback={<div>Wczytywanie...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" exact component={Posts}/>
            <Route path='/posts/new' exact component={NewPost}/>
            <Route path='/posts/:id' exact component={SinglePost}/>
            <Route path="/contact" exact component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </MainLayout>
    );
  }
}//extact- all address characters must be the same like in link

export default App;