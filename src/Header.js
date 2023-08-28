import React from 'react';
import './Header.css';
import {Search,PersonOutline,Home,FlashOn,LiveTv,VideoLibrary} from '@material-ui/icons';

function Header() {
    return (
        <div className="header">
            <div className="header__icons">

                <div className="header__icon header__icon--active">
                    <Home/>
                    <p>Home</p>
                </div>
                <div className="header__icon">
                    <FlashOn/>
                    <p>Trending</p>
                </div>
                <div className="header__icon">
                    <LiveTv/>
                    <p>Verified</p>
                </div>
                <div className="header__icon">
                    <VideoLibrary/>
                    <p>Collections</p>
                </div>
                <div className="header__icon">
                    <Search/>
                    <p>Search</p>
                </div>
                <div className="header__icon">
                    <PersonOutline/>
                    <p>Account</p>
                </div>

            </div>
            <img className="header__logo" alt="hulu" src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"/>
            
        </div>
    )
}

export default Header;
