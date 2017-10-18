import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Home = ({ setting }) => (
  <div>hey {setting.creator}</div>
);

const mapStateToProps = ({ setting }) => ({
  setting,
});

const mapDispatchToProps = dispatch => ({
  // pSetQuery: q => dispatch(setQuery(q)).then(() => dispatch(fetchPaginateResult())),
  // pFetchPaginateResult: (page = 1) => dispatch(fetchPaginateResult(page)),
  // pFirst: () => dispatch(first()),
  // pLast: () => dispatch(last()),
  // pNext: () => dispatch(next()),
  // pPrev: () => dispatch(prev()),
  // pSetPerPage: val => dispatch(setPerPage(val)),
  // pSetSelectedColumns: val => dispatch(setSelectedColumns(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
