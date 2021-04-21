import "./assets/css/koios.scss";
import { Header } from "./components/Layout/Header/Header";
import AppData from "./static/AppData.json";
import { Icon } from "./components/Utils/Icon";
import { SvgSprite } from "./components/Utils/SvgSprite";
import koiosCircle from "./assets/images/logos/koios-circle.svg";

export const App = () => {
  return (
    <section className="home">
      <section className="introduction">
        <Header />

        <div className="introduction__wrapper">
          <div className="introduction__koios-icon">
            <img src={koiosCircle} alt="Koios logo" />
          </div>
          <h1 className="introduction__headline">{AppData.headline}</h1>
          <div className="introduction__btn-wrap">
            <a
              className="introduction__link btn btn--koios-gradient"
              href="https://www.koios.online/blockchainminor"
            >
              Blockchain technology
            </a>
            <a
              className="introduction__link btn btn--koios-gradient"
              href="https://www.koios.online/tdfa"
            >
              Trading & investing
            </a>
          </div>
          {/* <a className="introduction__link btn btn--koios-gradient" href="/">
              Go to courses
            </a> Enable this and remove div introduction__btn-wrap as soon as single btn*/}
        </div>

        <div className="this-week">
          <h2 className="this-week__title">This week</h2>
          <a
            className="this-week__button introduction__link btn btn--koios-pink"
            href="https://cloudflare-ipfs.com/ipfs/QmUFmDaKRKGCJcZ2CAQd1jfSkBEi9siDnMCf37yCDKAD9r"
            target="_blank"
            rel="noreferrer"
          >
            Blockchain week timetable
          </a>
        </div>

        <div className="social">
          <ul className="social__list">
            {AppData.social.map((item, index) => (
              <li className="social__list-item" key={index}>
                <a
                  href={item.linkTo}
                  target={item.openInNewTab ? "_blank" : "_self"}
                  rel="noreferrer"
                >
                  <Icon type={item.icon as keyof typeof SvgSprite} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="introduction__message">
          We are rebranding. A new everything in the coming months.
        </p>
      </section>
    </section>
  );
};
