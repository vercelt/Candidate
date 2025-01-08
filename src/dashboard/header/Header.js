import "./Header.css";

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <img src="/images/Vector.png" alt="Menu" />
        <p className="smartTalenConnect">SmartTalenConnect</p>
      </div>
      <div className="header-right">
        <div className="notification-wrapper">
          <img src="/images/msg.png" alt="Menu" />
          <span className="notification-dot"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
