import React from 'react'
import { Outlet } from 'react-router-dom'

const WebsiteLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>Menu</li>
                        <li>Menu</li>
                        <li>Menu</li>
                        <li>Menu</li>
                        <li>Menu</li>
                    </ul>
                </nav>
                <div className="banner">
                    <img src="https://picsum.photos/1920/300" alt="" />
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <span>Copyright ...</span>
            </footer>
        </div>
    )
}

export default WebsiteLayout