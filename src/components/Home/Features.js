import React from "react";
import {
  Codepen,
  Youtube,
  HelpCircle,
  Chrome,
  UserPlus,
  UploadCloud,
  AlertCircle,
  Star,
  GitMerge,
  Minimize,
  Filter,
  Folder,
} from "react-feather";
import { withRouter } from "react-router-dom";

const Features = ({ history }) => {
  return (
    <section id="features" className="container" style={{ marginTop: "1rem" }}>
      <div className="features">
        <div className="features-title has-text-centered">
          <h3 className="title is-3 is-bold">
            Access Hundreds of Resources in One Place.
          </h3>
          <p>Our contributors have aggregated all the information you need!</p>
        </div>
        <div className="columns">
          <div className="column is-5 is-offset-1">
            <div
              className="feature-card"
              onClick={() => history.push("/resources/1")}
            >
              <Codepen size={70} color="#00d1b2" />
              <div className="meta">
                <h3 className="has-text-info">Design Resources</h3>
                <p>
                  Take your UI/UX creative journey a little further. Find all
                  the resources you need as a developer to create beautiful and
                  memorable UI/UX.
                </p>
              </div>
            </div>

            <div
              className="feature-card"
              onClick={() => history.push("/resources/4")}
            >
              <Youtube size={70} color="#00d1b2" />
              <div className="meta">
                <h3 className="has-text-info">Top Youtube Channels</h3>
                <p>
                  Watch time tested and top coding channels on youtube. Learn
                  from the best. Learn all the tricks of the game here. We have
                  your back.
                </p>
              </div>
            </div>

            <div
              className="feature-card"
              onClick={() => history.push("/resources/55")}
            >
              <HelpCircle size={70} color="#00d1b2" />
              <div className="meta">
                <h3 className="has-text-info">FAQ in Interview</h3>
                <p>
                  Here we give you links to resources of Frequently asked
                  Interview Questions and their explainations with examples on
                  how to answer them.
                </p>
              </div>
            </div>
          </div>
          <div className="column is-5">
            <div
              className="feature-card"
              onClick={() => history.push("/resources/5")}
            >
              <Chrome size={70} color="#00d1b2" />
              <div className="meta">
                <h3 className="has-text-info">App Ideas</h3>
                <p>
                  Pick from the pool of app development project ideas at all
                  levels of programming. Learn and get Experience from Building them.
                </p>
              </div>
            </div>

            <div
              className="feature-card"
              onClick={() => history.push("/resources/3")}
            >
              <UserPlus size={70} color="#00d1b2" />
              <div className="meta">
                <h3 className="has-text-info">Developer Portfolios</h3>
                <p>
                  Have a look at our collection of top Developers Portfolio. We
                  hope you will be inspired to put in more effort to acheive
                  greatness.
                </p>
              </div>
            </div>

            <div
              className="feature-card"
              onClick={() => history.push("/resources/2")}
            >
              <UploadCloud size={70} color="#00d1b2" />
              <div className="meta">
                <h3 className="has-text-info">Public APIs</h3>
                <p>
                  Play around with a collection of hundreds of public APIs to
                  ease your software and web development experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section" style={{ textAlign: "center" }}>
        <div className="features">
          <div className="features-title">
            <h3 className="title is-3 is-bold">Contribute Code</h3>
            <p>Contribute to this Open Source Project to Help Developers</p>
          </div>
        </div>

        <div className="columns is-multiline has-padding-10">
          <div className="column is-4 has-text-centered">
            <span className="has-text-primary has-margin-bottom-20">
              <AlertCircle size={45} />
            </span>

            <div className="is-size-5 has-text-weight-bold">Report Issue</div>
            <div className="is-size-6 has-text-centered has-margin-top-20">
              Open an issue if you want to suggest a new feature or report a
              bug.
            </div>
          </div>

          <div className="column is-4  has-text-centered ">
            <span className="has-text-primary has-margin-bottom-20">
              <Star size={45} />
            </span>

            <div className="is-size-5 has-text-weight-bold">Star</div>
            <div className="is-size-6 has-text-centered has-margin-top-20">
              We hope that, this website will help you to become a better
              programmer. Show your support by giving us a star on GitHub.
            </div>
          </div>

          <div className="column is-4  has-text-centered ">
            <span className="has-text-primary has-margin-bottom-20">
              <GitMerge size={45} />
            </span>

            <div className="is-size-5 has-text-weight-bold">Pull Request</div>
            <div className="is-size-6 has-text-centered has-margin-top-20">
              You are welcomed to send a pull request if you want to make
              changes or increase publicity for this project!
            </div>
          </div>
        </div>
      </div>
      <div
        className="section"
        style={{ marginBottom: "3rem", textAlign: "center" }}
      >
        <div className="features">
          <div className="features-title">
            <h3 className="title is-3 is-bold">Special Features</h3>
            <p>Special features of this website include...</p>
          </div>
        </div>

        <div className="columns is-multiline has-padding-10">
          <div className="column is-4 has-text-centered">
            <span className="has-text-primary has-margin-bottom-20">
              <Minimize size={45} />
            </span>

            <div className="is-size-5 has-text-weight-bold">Responsive</div>
            <div className="is-size-6 has-text-centered has-margin-top-20">
              Reading a Readme of a Repo on a mobile phone device is a challenge
              for most users. This website supports responiveness on all
              devices, even you are viewing a Repo.
            </div>
          </div>

          <div className="column is-4  has-text-centered ">
            <span className="has-text-primary has-margin-bottom-20">
              <Filter size={45} />
            </span>

            <div className="is-size-5 has-text-weight-bold">
              Resource Filter
            </div>
            <div className="is-size-6 has-text-centered has-margin-top-20">
              Provides a good and handy feature to filter resources according to
              your requirements and needs.
            </div>
          </div>

          <div className="column is-4  has-text-centered ">
            <span className="has-text-primary has-margin-bottom-20">
              <Folder size={45} />
            </span>

            <div className="is-size-5 has-text-weight-bold">Collection</div>
            <div className="is-size-6 has-text-centered has-margin-top-20">
              A collection of several useful resources we think might be helpful
              to you as a programmer.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Features);
