import Image from 'next/image';
import './Header.css'; // Make sure to create and style this CSS file

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo"/>
        </div>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <span className="search-icon" >
            🔍
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
