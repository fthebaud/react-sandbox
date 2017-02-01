import React from 'react';

class UrlParams extends React.Component {
  constructor() {
    super();
    this.renderOneParam = this
      .renderOneParam
      .bind(this);
  }

  renderOneParam(p) {
    return (
      <li key={p}>{p}</li>
    );
  }

  render() {
    const {params} = this.props;
    return (
      <div>
        <p>urls parameters :</p>
          {
            Object.keys(params)
              .map(key => this.renderOneParam(params[key]))
          }
      </div>
    );
  }
}

UrlParams.propTypes = {
  params: React.PropTypes.object
};

export default UrlParams;