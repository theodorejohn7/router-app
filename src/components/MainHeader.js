import {NavLink} from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
          <NavLink activeClassName={classes.active} to="/login">Login </NavLink>
           
            {/* <a href="/welcome">Welcome </a> */}
          </li>
          <li>
            <NavLink  activeClassName={classes.active}  to="/register">Register </NavLink>
          </li>
          <li>
            <NavLink  activeClassName={classes.active}  to="/welcome">Welcome</NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
