import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer';
import Header from './pages/Header';
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

const isAuthorization = true; // 로그인 상태 불러온 거

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {isAuthorization ? (
          <>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/account" element={<AccountPage />} />
          </>
        ) : (
          <>
            <Route exact path="/" element={<SigninPage />} />
            <Route exact path="/signup" element={<SignupPage />} />
          </>
        )}
      </Routes>
      {isAuthorization && <Footer />}
    </Router>
  );
};
export default AppRouter;
