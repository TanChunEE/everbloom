import { useEffect } from "react";

const formatDocumentTitle = (
  title,
  { prefix = "", suffix = "", separator = " | " } = {}
) => {
  return [prefix, title, suffix].filter(Boolean).join(separator);
};

/**
 * useDocumentTitle
 *
 *
 * A React hook to dynamically set the browser tab title (i.e., `document.title`)
 * with optional prefix/suffix formatting and unmount cleanup behavior.
 *
 * This hook helps enforce consistent title formatting across your app
 * (e.g., "Innosys | Dashboard") and ensures titles are reset if needed.
 *
 * @param {string} title - The main title content to set in the browser tab.
 *
 * @param {Object} [options] - Optional configuration for formatting and behavior.
 * @param {string} [options.prefix] - Optional prefix to prepend before the title (e.g., "Innosys").
 * @param {string} [options.suffix] - Optional suffix to append after the title (e.g., "Beta").
 * @param {string} [options.separator=' | '] - String used to separate prefix, title, and suffix.
 * @param {boolean} [options.retainOnUnmount=false] - Whether to keep the title after the component unmounts. Defaults to false, which restores the previous title.
 *
 * @returns {void}
 *
 * @example
 * // Basic usage - No options
 * useDocumentTitle("Dashboard")
 * // Result: "Dashboard"
 *
 * @example
 * // With prefix
 * useDocumentTitle("Reports", { prefix: "Innosys" })
 * // Result: "Innosys | Reports"
 *
 * @example
 * // With suffix
 * useDocumentTitle("Settings", { suffix: "Beta" })
 * // Result: "Settings | Beta"
 *
 * @example
 * // With custom separator
 * useDocumentTitle("Home", { prefix: "Innosys", separator: " — " })
 * // Result: "Innosys — Home"
 *
 * @example
 * // Retain title on unmount
 * useDocumentTitle("Loading...", { retainOnUnmount: true })
 */
const useDocumentTitle = (
  title,
  { prefix = "", suffix = "", separator = " | ", retainOnUnmount = false } = {}
) => {
  useEffect(() => {
    const defaultTitle = document.title;
    const formatted = title
      ? formatDocumentTitle(title, { prefix, suffix, separator })
      : defaultTitle;

    document.title = formatted;

    return () => {
      if (!retainOnUnmount) {
        document.title = defaultTitle;
      }
    };
  }, [title, prefix, suffix, separator, retainOnUnmount]);
};

export default useDocumentTitle;
