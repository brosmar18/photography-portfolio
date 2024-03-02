import "./Header.scss";

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header__images">
        <div className="header__imgOne" />
        <div className="header__imgTwo" />
      </div>
      <div className="header__content">
        <div className="header__text">
          <h1>capture the moments of your life</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sodales etiam augue euismod
            vitae. Massa molestie dictum sed viverra aliquam dictum praesent
            blandit. Amet sed elit netus ipsum urna enim pulvinar eget.{" "}
          </p>
        </div>
        <div className="header__btns">
          <button className="btn" type="submit">
            Discover
          </button>
          <button className="btn" type="submit">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
