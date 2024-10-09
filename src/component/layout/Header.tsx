const Header = () => {
  return (
    <header className="flex">
      {/* Logo */}
      <div>
        <h2 className="text-xl font-bold">Panaverse Logo</h2>
      </div>
      {/* Navigation Bar */}
      <div>
        <ul>
          <li>Home</li>
          <li>Course</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
