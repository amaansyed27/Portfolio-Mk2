import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MobilePage from './pages/MobilePage';
import WebPage from './pages/WebPage';
import AIPage from './pages/AIPage';
import { Route, Switch } from 'wouter';

export default function App() {
    return (
        <SmoothScroll>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/mobile" component={MobilePage} />
                <Route path="/web" component={WebPage} />
                <Route path="/ai" component={AIPage} />
                <Route>404: Page Not Found</Route>
            </Switch>
            <Navbar /> {/* Persistent Dock */}
        </SmoothScroll>
    );
}
