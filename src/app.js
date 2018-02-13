import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { fetchData } from './actions';
import { Header } from './components/common';

let styles;

const App = (props) => {
  return (
    <View>
      <Header headerText="Products" />
    </View>
  );
};


function mapStateToProps(state) {
  return {
    appData: state.productList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
