import React from 'react';
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
} from 'react-feather';

const Features = () => {
  return (
    <section id='features' className='container' style={{ marginTop: '1rem' }}>
      <div className='features'>
        <div className='features-title has-text-centered'>
          <h3 className='title is-3 is-bold'>
            Check Hundreds of Sources in One Place
          </h3>
          <p>Our contributors have aggregated everything for you</p>
        </div>
        <div className='columns'>
          <div className='column is-5 is-offset-1'>
            <div className='feature-card'>
              <Codepen size={70} color='#00d1b2' />
              <div className='meta'>
                <h3 className='has-text-primary'>Design Resources</h3>
                <p>
                  All the Resources which a Developer can use for their Design
                  to Create Beautiful UI/UX.
                </p>
              </div>
            </div>

            <div className='feature-card'>
              <Youtube size={70} color='#00d1b2' />
              <div className='meta'>
                <h3 className='has-text-primary'>Top Youtube Channels</h3>
                <p>
                  All the Top coding youtube channels form which you can learn
                  various things about Coding are Here.
                </p>
              </div>
            </div>

            <div className='feature-card'>
              <HelpCircle size={70} color='#00d1b2' />
              <div className='meta'>
                <h3 className='has-text-primary'>FAQ in Interview</h3>
                <p>
                  Frequently asked Interview Questions and Their Detailed
                  explaination with Examples are Here.
                </p>
              </div>
            </div>
          </div>
          <div className='column is-5'>
            <div className='feature-card'>
              <Chrome size={70} color='#00d1b2' />
              <div className='meta'>
                <h3 className='has-text-primary'>App Ideas</h3>
                <p>
                  Various different kinds of app ideas for different levels of
                  programmers are Here.
                </p>
              </div>
            </div>

            <div className='feature-card'>
              <UserPlus size={70} color='#00d1b2' />
              <div className='meta'>
                <h3 className='has-text-primary'>Developer Portfolio's</h3>
                <p>
                  Collection of so many Developer Portfolio's, from which you
                  can get inspired to acheive great.
                </p>
              </div>
            </div>

            <div className='feature-card'>
              <UploadCloud size={70} color='#00d1b2' />
              <div className='meta'>
                <h3 className='has-text-primary'>Public Api's</h3>
                <p>
                  Collection of different kinds of Free Api's to use in your
                  software and web Development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section' style={{ textAlign: 'center' }}>
        <div className='features'>
          <div className='features-title'>
            <h3 className='title is-3 is-bold'>Contribute Code</h3>
            <p>Contribute to this Open Source Project to Help Developers</p>
          </div>
        </div>

        <div className='columns is-multiline has-padding-10'>
          <div className='column is-4 has-text-centered'>
            <span className='has-text-primary has-margin-bottom-20'>
              <AlertCircle size={45} />
            </span>

            <div className='is-size-5 has-text-weight-bold'>Report Issue</div>
            <div className='is-size-6 has-text-centered has-text-grey has-margin-top-20'>
              open an issue if you want to suggest new feature or report any bug
              you found.
            </div>
          </div>

          <div className='column is-4  has-text-centered '>
            <span className='has-text-primary has-margin-bottom-20'>
              <Star size={45} />
            </span>

            <div className='is-size-5 has-text-weight-bold'>Star</div>
            <div className='is-size-6 has-text-centered has-text-grey has-margin-top-20'>
              show your support by giving star to this Repo. if this project
              helped you in anyways!
            </div>
          </div>

          <div className='column is-4  has-text-centered '>
            <span className='has-text-primary has-margin-bottom-20'>
              <GitMerge size={45} />
            </span>

            <div className='is-size-5 has-text-weight-bold'>Pull Request</div>
            <div className='is-size-6 has-text-centered has-text-grey has-margin-top-20'>
              Pull requests are welcome. if you want to change something on
              website Raise PR.
            </div>
          </div>
        </div>
      </div>
      <div
        className='section'
        style={{ marginBottom: '3rem', textAlign: 'center' }}
      >
        <div className='features'>
          <div className='features-title'>
            <h3 className='title is-3 is-bold'>Features</h3>
            <p>Features of this website.</p>
          </div>
        </div>

        <div className='columns is-multiline has-padding-10'>
          <div className='column is-4 has-text-centered'>
            <span className='has-text-primary has-margin-bottom-20'>
              <Minimize size={45} />
            </span>

            <div className='is-size-5 has-text-weight-bold'>Responsive</div>
            <div className='is-size-6 has-text-centered has-text-grey has-margin-top-20'>
              Reading a Readme of a Repo in mobile is very difficult for users.
              this website solve this issue.
            </div>
          </div>

          <div className='column is-4  has-text-centered '>
            <span className='has-text-primary has-margin-bottom-20'>
              <Filter size={45} />
            </span>

            <div className='is-size-5 has-text-weight-bold'>Filter</div>
            <div className='is-size-6 has-text-centered has-text-grey has-margin-top-20'>
              Good and handy feature to Filter resources according to your
              requirements and read it.
            </div>
          </div>

          <div className='column is-4  has-text-centered '>
            <span className='has-text-primary has-margin-bottom-20'>
              <Folder size={45} />
            </span>

            <div className='is-size-5 has-text-weight-bold'>Collection</div>
            <div className='is-size-6 has-text-centered has-text-grey has-margin-top-20'>
              collected several resources which we thought that it will be
              helpful for coders.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
