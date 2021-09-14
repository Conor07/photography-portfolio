import { useEffect } from "react";
import { withRouter } from "react-router-dom";

// From:
// https://stackoverflow.com/a/54343182
// When loading a new page it automatically scrolls the user to the top of the page.

// Before when in mobile view, if I was on the bottom of the "videography" page and clicked on either the "photography" or "music-videos" pages it would load down the page at the same position I was at on the "videography" page. This now makes sure you always start at the top of the page when loading a new page.

function LoadNewPageAtTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}

export default withRouter(LoadNewPageAtTop);
