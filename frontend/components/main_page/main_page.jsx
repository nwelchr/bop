import React from 'react';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="main-wrapper">
                <aside className="sidebar">
                    <span className="logo"><img src="assets/logo/logo-white.png" class="logo" /></span>
                    <ul className="sidebar-main">
                        <li className="sidebar-divider"></li>
                        <li className="search"><a><p>Search</p> <i class="fa fa-search"></i></a></li>
                        <li className="sidebar-divider"></li>
                        <li className="home"><Link to="/">Home</Link></li>
                        <li className="your-music">Your Music</li>
                        <li className="sidebar-divider"></li>
                    <ul className="recently-played-music">
                        <li className="recently-played">Recently Played</li>
                        <li>Azealia</li>
                        <li>Azealia</li>
                        <li>Azealia</li>
                        <li>Azealia</li>
                        <li>Azealia</li>
                    </ul>
                    </ul>
                </aside>
                <main className="main">wefojweoiwejfoiwejff</main>
                <section className="player">wef</section>
            </div>
        );
    }
}

export default MainPage;