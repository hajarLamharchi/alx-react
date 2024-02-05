import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';


function App() {
  const isLoggedIn = false
  if (isLoggedIn) {
    return (
      <>
        <Notifications/>
        <div className="App">
            <Header/>
            <Login/>
            <Footer/>
        </div>  
      </>
    )
  } else {
    return (
      <>
        <Notifications/>
        <div className="App">
            <Header/>
            <CourseList/>
            <Footer/>
        </div>  
      </>
    )
  }
}

export default App;
