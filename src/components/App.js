import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Listing from '../containers/listing';
import Data from '../containers/data';

function App() {
    const { Header, Content, Footer } = Layout;
    return (
        <Layout style = {{ minHeight: '100vh' }} className="layout mediumsize">
            <Header className = "header" style={{ textAlign: 'left' }}><h2>Coding Challenge</h2></Header>
            <Content style={{ margin: '0 16px', padding: '10px 50px 10px 50px' }}>
                <div id="layoutcontent" className="site-layout-content">
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <Listing />
                            </Route>
                            <Route exact path="/data/:id" component={Data} />
                        </Switch>
                    </Router>
                </div>
            </Content>
            <Footer className = "footer" style={{ textAlign: 'left' }}><h2>Coding Challenge ©June 2020 Designed by CarlosM</h2></Footer>

        </Layout>
    );
}

export default App;
