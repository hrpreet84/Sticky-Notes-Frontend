import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
const lStyle = {
  fontFamily: 'Pacifico',
  fontSize: '30px'
};

class App extends Component {

 
  logOutFn = e => {
    //e.preventDefault();
    sessionStorage.removeItem('token');
    this.props.history.push('/');
    console.log("Done");
  }

  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Stickies</Link>} scroll>
            <Navigation>
                <Link  to="/login"><span style={lStyle}>Login</ span></Link>
                <Link  to="/register">< span style={lStyle}>Register</ span></Link>
                
                <Link  to="/MyStickies">< span style={lStyle}>Stickies</ span></Link>
                <Link  to="/logout" onClick={this.logOutFn}>< span style={lStyle}>Logout</ span></Link>
            </Navigation>
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
