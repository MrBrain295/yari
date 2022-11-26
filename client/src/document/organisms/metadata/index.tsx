import { OnGitHubLink } from "../../on-github";
import { renderContributorsTxt } from "../../../../../build"
import "./index.scss";

export function LastModified({ value, locale }) {
  if (!value) {
    return <span>Last modified date not known</span>;
  }
  const date = new Date(value);
  // Justification for these is to match historically
  const dateStringOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return (
    <>
      <b>Last modified:</b>{" "}
      <time dateTime={value}>
        {date.toLocaleString(locale, dateStringOptions)}
      </time>
    </>
  );
}

export function Authors({ url }) {
  return <p>by <a href={`${url}/contributors.txt`}>MDN contributors</a></p>;
}

export function Metadata({ doc, locale }) {
  return (
    <aside className="metadata">
      <div className="metadata-content-container">
        {doc.isActive && <OnGitHubLink doc={doc} />}
        <p className="last-modified-date">
          <LastModified value={doc.modified} locale={locale} />,{" "}
          <Authors url={doc.mdn_url} /> View previous changes on this page <a href=`${githubURL}`>here</a>
        </p>
      </div>
    </aside>
  );
}
