import './index.scss';
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                <span className="tags top-tags">&lt;body&gt;</span>

                <Outlet /> {/* lets us render content into here from elsewhere*/}

                <span className="tags bottom-tags">
                &lt;/body&gt;
                <br />
                <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
                <span className="notice">Site is a work-in-progress. For best viewing, use a laptop/desktop display</span>
            </div>
        </div>
        
    )
}

export default Layout;