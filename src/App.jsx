import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routes from './routes/routes';
import Login from '../features/auth/Login';
import Signup from '../features/auth/SignUp'; 
import Home from '../Pages/Home/Home';
import Contact from '../Pages/Contact/Contact';
import ServicesPage from '../Pages/Service/Service';
import GuaranteePage from '../Pages/garantee/garantee';

function App() {
  return (
    <Router>
      <Routes>
         <Route path={routes.home} element={<Home />} />
        <Route path={routes.login} element={<Login />} />
         <Route path={routes.register} element={<Signup />} /> 
         <Route path={routes.contact} element={<Contact />} /> 
          <Route path={routes.service} element={<ServicesPage />} /> 
          <Route path={routes.garantee} element={<GuaranteePage />} /> 
        {/* Placeholder routes for future pages */}
        <Route path={routes.dashboard} element={<h1 className="p-6">Dashboard Page</h1>} />
        <Route path={routes.notFound} element={<h1 className="p-6">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
