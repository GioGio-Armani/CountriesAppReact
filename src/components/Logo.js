import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images sont dans le dossier public quand elle sont importé dans une balise img */}
      <img src="./logo192.png" alt="logo-react" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;
