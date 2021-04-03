import React, { useEffect } from 'react';
import { Download } from 'react-feather';
import { savePDF } from '@progress/kendo-react-pdf';

class DocService {
  createPdf = (html, name, setDisable) => {
    savePDF(
      html,
      {
        title: 'webdevscom.github.io',
        scale: 0.8,
        producer: 'WebDevsCom',
        subject: 'Learning Resources',
        creator: 'Binu kumar',
        paperSize: 'Letter',
        fileName: name + '.pdf',
        margin: 5,
      },
      () => {
        setDisable(false);
      }
    );
  };
}

const Doc = new DocService();

export default (props) => {
  const bodyRef = React.createRef();
  const [disable, setDisable] = React.useState(false);
  const createPdf = () => {
    setDisable(true);
    Doc.createPdf(bodyRef.current, props.name, setDisable);
  };

  useEffect(() => {
    if (disable) {
      document.querySelector('body').classList.add('overflow-hidden');
    } else {
      document.querySelector('body').classList.remove('overflow-hidden');
    }
  }, [disable]);
  return (
    <section>
      <div className='has-text-centered' style={{ padding: '10px 0 20px' }}>
        {disable ? (
          <div id='cover-spin'></div>
        ) : (
          <button
            className='button button-special box-shadow-lift is-primary is-medium is-rounded fadeInUp'
            onClick={createPdf}
            style={{ animationDelay: '0.25s' }}
            id='download-pdf'
            disabled={disable}
          >
            <Download />
            <span>&emsp;Download PDF</span>
          </button>
        )}
      </div>
      <section className='pdf-body' ref={bodyRef}>
        {props.children}
      </section>
    </section>
  );
};
