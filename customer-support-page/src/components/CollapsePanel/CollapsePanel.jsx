import React, { useState } from 'react';

const CollapsePanel = function CollapsePanel({ data }) {
  const [panelShow, setPanelShow] = useState(false);
  return (
    <section>
      <section
        className="q-panel"
        role="button"
        onClick={() => setPanelShow(!panelShow)}
      >
        <button role="button" className="panel-expand">
          {panelShow ? '-' : '+'}
        </button>

        <p className="secondary-highlight">{data.question}</p>
      </section>
      {/* Answer Dropdown */}
      <section className={panelShow ? 'a-panel-show' : 'a-panel-hide'}>
        <p className="primary-body">{data.answer}</p>
      </section>
    </section>
  );
};

export default CollapsePanel;
