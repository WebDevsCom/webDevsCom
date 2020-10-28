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
            Access Hundreds of Sources in One Place
          </h3>
          <p>
            Our contributors have aggregated the information you need to
            succeed.
          </p>
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
                  Take your UI/UX creative journey further. Find all the
                  resources you need as a developer to create beautiful and
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
                  Experience time tested top coding channels on youtube. Learn
                  from the best. Learn all the tricks of the game here, we have
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
                  Frequently asked Interview Questions and detailed
                  explainations and examples on how to answer them can be found
                  here.
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
                  Pick various kinds of app development project ideas for
                  different levels of programmers are Here.
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
                  Have a look at our collection of many Developer Portfolios. We
                  hope you will be inspired to put in more effort acheive
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
                  Play around with a collection of several Free APIs to ease
                  your software and web development experience.
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
              Open an issue if you want to suggest new feature or report a bug.
            </div>
          </div>

          <div className="column is-4  has-text-centered ">
            <span className="has-text-primary has-margin-bottom-20">
              <Star size={45} />
            </span>

            <div className="is-size-5 has-text-weight-bold">Star</div>
            <div className="is-size-6 has-text-centered has-margin-top-20">
              We hope the site helped you become a better programmer. Show your
              support by giving a star to this Repo.
            </div>
          </div>

          <div className="column is-4  has-text-centered ">
            <span className="has-text-primary has-margin-bottom-20">
              <GitMerge size={45} />
            </span>

            <div className="is-size-5 has-text-weight-bold">Pull Request</div>
            <div className="is-size-6 has-text-centered has-margin-top-20">
              You are welcomed send a pull request, if want to make changes or
              increase publicity of the project!
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
            <p>Some special features of this website includes.</p>
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
              devices.
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
              Provide a good and handy feature to filter resources according to
              your requirements and needs.
            </div>
          </div>

          <div className="column is-4  has-text-centered ">
            <span className="has-text-primary has-margin-bottom-20">
              <Folder size={45} />
            </span>

            <div className="is-size-5 has-text-weight-bold">Collection</div>
            <div className="is-size-6 has-text-centered has-margin-top-20">
              Collected several useful resources we thought will be help you in
              your coding journey.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Features);
