import MenuItem from "./menu-item";

function Menu() {
  const items = [
    { title: 'Главная', url: '/' },
    { title: 'Дрифт-такси', url: '/drift' },
    { title: 'Time Attack', url: '/timeattack' },
    { title: 'Forza Karting', url: '/forza' }
  ];

  return (
    <nav className="menu">
      {items.map(item => <MenuItem key={item.title} {...item} />)}
    </nav>
  );
}

export default Menu;