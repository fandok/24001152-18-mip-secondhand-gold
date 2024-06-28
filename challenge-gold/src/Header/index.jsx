import "./styles.css";

const Header = () => {
  return (
    <div className="hero flex-header">
      <div className="blue-block" />
      <div className="header-hero hidden-mobile">
        <span>Our Service</span>
        <span>Why Us</span>
        <span>Testimonial</span>
        <span>FAQ</span>
      </div>
      <img className="web-screen1" src="/landing-page/fi_menu.png" alt="menu" />
    </div>
  );
};

export default Header;
