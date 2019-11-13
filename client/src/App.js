import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { IndexRoute } from 'react-router';

import MainLayout from './components/layout/MainLayout/MainLayout';
//routes
import Home from './components/pages/Home/HomePage';
import Posts from './components/pages/Posts/PostsPage';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import SinglePost from './components/pages/SinglePost/SinglePost';
import NewPost from './components/pages/NewPost/NewPost';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts" exact component={Posts}/>
          <Route path='/posts/new' exact component={NewPost}/>
          <Route path='/posts/:id' exact component={SinglePost}/>
          <Route path="/contact" exact component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }
}//extact- all address characters must be the same like in link

export default App;
