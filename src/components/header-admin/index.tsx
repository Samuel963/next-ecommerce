import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "use-onclickoutside";

import Logo from "../../assets/icons/logo";

type HeaderType = {
  isErrorPage?: boolean;
};

const HeaderAdmin = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  const arrayPaths = ["/"];

  const [onTop, setOnTop] = useState(
    !(!arrayPaths.includes(router.pathname) || isErrorPage)
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const headerClass = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  useEffect(() => {
    if (!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // on click outside
  useOnClickOutside(navRef, closeMenu);

  return (
    <header className={`site-header ${!onTop ? "site-header--fixed" : ""}`}>
      <div className="container">
        <Link href="/">
          <h1 className="site-logo">
            <Logo onTop={onTop} />
          </h1>
        </Link>
        <nav
          ref={navRef}
          className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
        >
          <Link href="/">Início</Link>
          <Link href="/admin/list">Itens</Link>
          <Link href="/admin/create">Pedidos</Link>
          <Link href="/admin/create">Adicionar</Link>
        </nav>

        <div className="site-header__actions">
          <button
            onClick={() => setMenuOpen(true)}
            className="site-header__btn-menu"
          >
            <i className="btn-hamburger">
              <span />
            </i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
