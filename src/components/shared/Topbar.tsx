import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  return (
    <section className="md_topbar">
      <div className="flex-between py-4 px-5 bg-black-200">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={130}
            height={325}
          />
        </Link>
      </div>
    </section>
  );
};

export default Topbar;
