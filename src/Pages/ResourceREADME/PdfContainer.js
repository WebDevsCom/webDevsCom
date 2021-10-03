import React, { createRef, useEffect, useState } from "react";
import { Download, GitHub } from "react-feather";
import { savePDF } from "@progress/kendo-react-pdf";

class DocService {
  createPdf = (html, name, setDisable) => {
    savePDF(
      html,
      {
        title: "webdevscom.github.io",
        scale: 0.8,
        producer: "WebDevsCom",
        subject: "Learning Resources",
        creator: "Binu kumar",
        paperSize: "Letter",
        fileName: name + ".pdf",
        margin: 5,
      },
      () => {
        setDisable(false);
      },
    );
  };
}

const Doc = new DocService();

export default ({ name, ownerName, children }) => {
  const bodyRef = createRef();
  const [disable, setDisable] = useState(false);
  const createPdf = () => {
    setDisable(true);
    Doc.createPdf(bodyRef.current, name, setDisable);
  };

  useEffect(() => {
    if (disable) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [disable]);

  return (
    <section>
      <div className="has-text-centered" style={{ padding: "10px 0 20px" }}>
        {disable ? (
          <div id="cover-spin"></div>
        ) : (
          <div
            className="has-text-centered fadeInUp"
            style={{ animationDelay: ".5s" }}
          >
            <button
              className="button button-special m-1 box-shadow-lift is-primary is-medium is-rounded"
              onClick={createPdf}
              id="download-pdf"
              disabled={disable}
            >
              <Download />
              <span>&emsp;Download PDF</span>
            </button>
            <a
              href={`https://github.com/${ownerName}/${name}/`}
              className="button button-special m-1 box-shadow-lift is-medium is-rounded"
              target="_blank"
              rel="noopener noreferrer"
              id="view-on-github"
            >
              <GitHub /> <span> &emsp;View on Github</span>
            </a>
          </div>
        )}
      </div>
      <section className="pdf-body" ref={bodyRef}>
        {children}
      </section>
    </section>
  );
};
