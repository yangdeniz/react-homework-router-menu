import { NavLink } from 'react-router-dom';

function MenuItem(props) {
  return (
    <NavLink to={props.url} className="menu__item">{props.title}</NavLink>
  );
}

export default MenuItem;