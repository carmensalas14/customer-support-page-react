import React, { useState, PropTypes } from 'react';

const CollapsePanel = function CollapsePanel({ data }) {
  const [panelShow, setPanelShow] = useState(false);
  return (
    <section>
      <section
        key={index}
        className="q-panel"
        role="button"
        onClick={() => setPanelShow(!panelShow)}
      >
        <div role="img" className="panel-expand">
          {panelShow ? '-' : '+'}
        </div>

        <p className="secondary-highlight">{data.question}</p>
      </section>
      {/* Answer Dropdown */}
      <section className={panelShow ? 'a-panel-show' : 'a-panel-hide'}>
        <p className="primary-body">{data.answer}</p>
      </section>
    </section>
  );
};

CollapsePanel.propTypes = {
  data: PropTypes.object,
  onClickOut: PropTypes.func,
};

export default CollapsePanel;
