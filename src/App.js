import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import config from './config/index';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import Support from './pages/Support';
import Career from './pages/Career';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path={config.routes.home}
                        element={
                            <DefaultLayout>
                                <Home />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path={config.routes.support}
                        element={
                            <DefaultLayout>
                                <Support />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path={config.routes.career}
                        element={
                            <DefaultLayout>
                                <Career />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path={config.routes.contact}
                        element={
                            <DefaultLayout>
                                <Contact />
                            </DefaultLayout>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
