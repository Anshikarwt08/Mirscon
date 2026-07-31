import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // If there is no hash, always scroll to the top
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
      return;
    }

    const id = location.hash.substring(1);

    const scroll = () => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        setTimeout(scroll, 100);
      }
    };

    scroll();
  }, [location]);

  return null;
}

export default ScrollToHash;