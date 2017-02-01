import React from 'react';

class Query extends React.Component {
  render() {
    return (
      <h2>{this.props.location.query.message}</h2>
    );
  }
}

Query.propTypes = {
  location: React.PropTypes.object
};

export default Query;