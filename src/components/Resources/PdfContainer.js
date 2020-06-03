import React from 'react';
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
        margin: 3,
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
  return (
    <section id='markdown-content'>
      <div className='has-text-centered' style={{ padding: '10px 0 20px' }}>
        <button
          className='button button-special is-primary is-medium is-rounded'
          onClick={createPdf}
          id='download-pdf'
          disabled={disable}
        >
          <Download />{' '}
          <span>&emsp;{!disable ? 'Download PDF' : 'Downloading...'}</span>
        </button>
      </div>
      <section className='pdf-body' ref={bodyRef}>
        {props.children}
      </section>
    </section>
  );
};
