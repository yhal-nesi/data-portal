import { connect } from 'react-redux';
import MapDataModel from './MapDataModel';
import { fetchWithCreds } from '../actions';
import { GQLHelper } from '../gqlHelper';
import { fetchQuery } from 'relay-runtime';
import environment from '../environment';

const ReduxMapDataModel = (() => {
  const mapStateToProps = state => ({
    filesToMap: state.submission.filesToMap,
    projects: state.homepage.projectsByName,
    nodeTypes: state.submission.nodeTypes,
    dictionary: state.submission.dictionary
  });

  const mapDispatchToProps = dispatch => ({
  });

  return connect(mapStateToProps, mapDispatchToProps)(MapDataModel);
})();

export default ReduxMapDataModel;
