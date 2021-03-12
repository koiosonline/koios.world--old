import koiosLogo from "../../../assets/images/logos/koios-logo.svg";
import HeaderData from "./static/HeaderData.json";

export const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src={koiosLogo} alt="Koios logo" />
      </a>

      <nav className="navigation">
        <ul className="navigation__list">
          {HeaderData.nav.map((link, index) => (
            <li
              className={`navigation__list-item ${
                index === 0 ? "navigation__list-item--active" : ""
              }`}
              key={index}
            >
              <a
                href={link.linkTo}
                target={link.openInNewTab ? "_blank" : "_self"}
                rel="noreferrer"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
