import '../styles/appbarStyles.css';

export default function Appbar() {
    return (
        <nav class="page__menu menu">
        <ul class="menu__list r-list">
          <li class="menu__group"><a href="#0" class="menu__link r-link text-underlined">Dashboard</a></li>
          <li class="menu__group"><a href="#0" class="menu__link r-link text-underlined">Postings</a></li>
          <li class="menu__group"><a href="#0" class="menu__link r-link text-underlined">About</a></li>
          <li class="menu__group"><a href="#0" class="menu__link r-link text-underlined">Help</a></li>
        </ul>
      </nav>
    );
}
