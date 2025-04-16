import "./App.css";
import store from "./utils/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./utils/routes";
import Cortana from './components/applications/cortana/cortana.application';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes />
            </Router>
            <div id="cortana-modal" className="cortana-modal">
                <Cortana />
            </div>
        </Provider>
    );
}

export default App;
