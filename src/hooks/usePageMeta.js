import { useEffect } from "react";
import { PAGES } from "../constants/seo";

// Updates the tab title and description when navigating between pages.
export default function usePageMeta(path) {
  useEffect(() => {
    const { title, description } = PAGES[path];
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [path]);
}
