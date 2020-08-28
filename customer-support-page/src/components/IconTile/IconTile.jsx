import React, { PropTypes } from 'react';

const IconTile = function IconTile({ data }) {
  return (
    <section className="tile">
      <section className="tile-icon">
        <img src={data.icon_img} alt={data.icon_img_alt} />
      </section>
      <section className="tile-description">
        <h3 className="primary-highlight">{data.title}</h3>
        <p className="primary-body">{data.description}</p>
      </section>
    </section>
  );
};
IconTile.PropTypes = {
  data: PropTypes.object,
};

export default IconTile;
