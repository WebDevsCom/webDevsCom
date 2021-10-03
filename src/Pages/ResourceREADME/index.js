import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Axios from "axios";
import Spinner from "../../Components/Spinner";
import resources from "../../data/resourcesData";
import CodeBlock from "./code-blocks";
import ReadmeUtilsBtn from "./ReadmeUtilsBtn";
import { slug } from "github-slugger";
import PdfContainer from "./PdfContainer";
import Page from "../../Components/Page";
import NoData from "../../Components/NoData";
import OtherReposByAuthorModal from "./OtherReposByAuthorModal";

const ResourceREADME = (props) => {
  const [markdown, setMarkdown] = useState("");
  const [repoInfo, setRepoInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [bookmarks, setBookMarks] = useState([]);
  const [isBookMarked, setBookMarked] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [authorRepos, setAuthorRepos] = useState([]);

  useEffect(() => {
    setBookMarks(JSON.parse(localStorage.getItem("bookmarks")));
    let BookMarked = bookmarks?.find(
      (bookMarkId) => repoInfo?.id === bookMarkId,
    );
    setBookMarked(BookMarked ? true : false);

    // Todo: need to make it better sometime later.
    if (loading === false) {
      const repos = [];
      resources.forEach((resource) => {
        if (resource.repoOwnerName === repoInfo?.repoOwnerName) {
          repos.push(resource);
        }
      });

      setAuthorRepos(repos);

      const h1 = document.querySelectorAll("#markdown h1");
      for (var i = 0; i < h1.length; i++) {
        h1[i].className = "title is-2";
        h1[i].setAttribute("id", slug(h1[i].innerHTML));
      }

      const h2 = document.querySelectorAll("#markdown h2");
      for (i = 0; i < h2.length; i++) {
        h2[i].className = "title is-3";
        h2[i].setAttribute("id", slug(h2[i].innerHTML));
      }

      const h3 = document.querySelectorAll("#markdown h3");
      for (i = 0; i < h3.length; i++) {
        h3[i].className = "title is-4";
        h3[i].setAttribute("id", slug(h3[i].innerHTML));
      }

      const strong = document.querySelectorAll("#markdown strong");
      for (i = 0; i < strong.length; i++) {
        strong[i].setAttribute("id", slug(strong[i].innerHTML));
      }

      const table = document.querySelectorAll("#markdown table");
      for (i = 0; i < table.length; i++)
        table[i].className =
          "table is-hoverable is-dark is-fullwidth is-striped";

      const images = document.querySelectorAll("img");
      for (i = 0; i < images.length; i++) {
        if (images[i].src.includes(window.location.origin)) {
          images[i].setAttribute(
            "src",
            `https://raw.githubusercontent.com/${repoInfo.repoOwnerName}/${
              repoInfo.repoName
            }/master${images[i].src
              .replace(window.location.origin, "")
              .replace(window.location.pathname, "")
              .replace("/resources", "")}`,
          );
        }
      }

      var el = document.querySelectorAll("#markdown a");
      for (i = 0; i < el.length; i++) {
        if (
          el[i].href.includes("./") ||
          (el[i].href.includes(".md") &&
            el[i].href.includes(window.location.origin))
        ) {
          el[i].setAttribute(
            "href",
            `https://github.com/${repoInfo.repoOwnerName}/${
              repoInfo.repoName
            }/blob/master${el[i].href
              .replace(window.location.origin, "")
              .replace(window.location.pathname, "")
              .replace("/resources", "")}`,
          );
          el[i].setAttribute("target", "_blank");
        } else if (!el[i].href.includes("#")) {
          el[i].setAttribute("target", "_blank");
        } else if (el[i].href.includes("#")) {
          el[i].setAttribute("href", el[i].href.toLowerCase());
        }
      }
    }
    // eslint-disable-next-line
  }, [loading, repoInfo]);

  const bookmarkIt = () => {
    setBookMarked(true);
    if (bookmarks === null) {
      localStorage.setItem("bookmarks", JSON.stringify([repoInfo.id]));
    } else {
      bookmarks.push(repoInfo.id);
      setBookMarks(bookmarks);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  };

  const removeBookmark = () => {
    setBookMarked(false);
    const bookMarks =
      bookmarks && bookmarks.filter((bookmarkId) => bookmarkId !== repoInfo.id);
    setBookMarks(bookMarks);
    localStorage.setItem("bookmarks", JSON.stringify(bookMarks));
  };

  useEffect(() => {
    setLoading(true);
    setModalOpen(false);
    const id = props.match.params.id;
    const repo = resources.find(
      (resource) => String(resource.id) === String(id),
    );
    setRepoInfo(repo);
    if (repo) {
      Axios.get(repo.link).then((markdown) => {
        setMarkdown(markdown.data);
        setLoading(false);
      });
    }
  }, [props.match.params.id]);

  useEffect(() => {
    isModalOpen
      ? document.querySelector("html").classList.add("is-clipped")
      : document.querySelector("html").classList.remove("is-clipped");
  }, [isModalOpen]);

  if (!repoInfo)
    return (
      <NoData text="Not able to find the Resource which you are looking for." />
    );

  if (loading) return <Spinner />;

  return (
    <Page title={repoInfo.repoName}>
      <div className="container" id="markdown">
        <div id="table-of-contents"></div>
        <ReadmeUtilsBtn
          isBookMarked={isBookMarked}
          removeBookmark={removeBookmark}
          bookmarkIt={bookmarkIt}
          setModal={setModalOpen}
        />
        <PdfContainer
          forcePageBreak=".page-break"
          name={repoInfo.repoName}
          ownerName={repoInfo.repoOwnerName}
        >
          <div id="markdown-content">
            <ReactMarkdown
              source={markdown}
              escapeHtml={false}
              renderers={{ code: CodeBlock }}
            />
          </div>
        </PdfContainer>

        {isModalOpen && (
          <OtherReposByAuthorModal
            authorRepos={authorRepos}
            setModal={setModalOpen}
            currentRepoId={repoInfo.id}
          />
        )}
      </div>
    </Page>
  );
};

export default ResourceREADME;
