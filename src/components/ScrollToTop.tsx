import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  // Force scroll to top on initial mount (handles refresh)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);


  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, hash]);
  return null;
};

export default ScrollToTop;
