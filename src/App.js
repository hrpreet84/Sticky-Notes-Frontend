import React, { Component } from 'react';
import './App.css';
import { Layout, Header ,Content } from 'react-mdl';
import Main from './components/main';
import Nav from './components/Nav';
import { Link } from 'react-router-dom';
import { islogin } from './utils/index';
import LoggedInNav from './components/LoggedInNav';
import MySticky from './components/MySticky';

const lStyle = {
  fontFamily: 'Pacifico',
  fontSize: '30px'
};

const isLoggedIn = islogin();
class App extends Component {

  render() {
    
    let sNav = <Nav />;

    if (islogin()) {
      sNav = <LoggedInNav />;
    } else {
      sNav = <Nav />;
    }
    return (
      <div className="demo-big-content">
    <Layout>
    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Stickies</Link>} scroll>
      {sNav}    
      </Header>
        {/* <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Sticky Notes</Link>}>
            <Navigation>
              <Link to="/#">1</Link>
              <Link to="/#">2</Link>
            </Navigation>
        </Drawer> */}
        <Content>
            <div className="page-content" />
            <Main/>
            
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
