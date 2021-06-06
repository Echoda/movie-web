import React from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import MovieList from './components/MovieList/index';
import UserList from './components/UserList/index';
import EditMovie from './components/EditMovie';
import './index.less';

export default function Admin() {
    return (
        <div className="admin-page">
            <div className="header">
                <p className="title">电影点评网站管理系统</p>
                <Link to="/home" className="tohome">回到首页</Link>
            </div>
            <div className="middle">
                <ul className="menu">
                    <li>
                        <Link to="/admin/movielist" style={{ color: '#000' }}>影片列表</Link>
                    </li>
                    <li>
                        <Link to="/admin/userlist" style={{ color: '#000' }}>用户列表</Link>
                    </li>
                </ul>
                <div className="main">
                    <Switch>
                        <Route path="/admin/movielist" exact component={MovieList} />
                        <Route path="/admin/movielist/add" exact component={EditMovie} />
                        <Route path="/admin/movielist/:id" exact component={EditMovie} />
                        <Route path="/admin/userlist" component={UserList} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
