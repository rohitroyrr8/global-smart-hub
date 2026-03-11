import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // On first load, if on an internal page, redirect to homepage
    const isFirstLoad = !sessionStorage.getItem("app_loaded");
    if (isFirstLoad) {
      sessionStorage.setItem("app_loaded", "true");
      if (pathname !== "/") {
        navigate("/", { replace: true });
        return;
      }
    }
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
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

export default ScrollToTop;
