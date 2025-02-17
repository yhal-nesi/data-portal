import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import parse from 'html-react-parser';
import IconicLink from './buttons/IconicLink';
import './Introduction.less';
import { useArboristUI, hideSubmissionIfIneligible } from '../configs';
import { userHasCreateOrUpdateOnAnyProject } from '../authMappingUtils';

class Introduction extends Component {
  render() {
    let buttonText = 'Submit Data';
    if (this.props.data.buttonText) {
      ({ buttonText } = this.props.data);
    } else if (useArboristUI) {
      if (userHasCreateOrUpdateOnAnyProject(this.props.userAuthMapping)) {
        buttonText = 'Submit/Browse Data';
      } else {
        buttonText = 'Browse Data';
      }
    }

    const shouldDisplaySubmissionButton = (() => {
      if (!this.props.data.link) {
        return false;
      }
      if (useArboristUI && hideSubmissionIfIneligible) {
        if (userHasCreateOrUpdateOnAnyProject(this.props.userAuthMapping)) {
          return true;
        }
        return false;
      }
      return true;
    })();

    return (
      <div className='introduction'>
        <h1>
          <div className='h1-typo introduction__title'>
            {this.props.data.heading}
          </div>
        </h1>
        <div className='high-light introduction__text'>
          {(this.props.data.text) ? parse(this.props.data.text) : null}
          {(this.props.data.multiLineTexts)
            ? (this.props.data.multiLineTexts
              .map((text, i) => <p key={i}>{parse(text)}</p>)) : null}
        </div>
        <button
          className='button-primary-orange'
          //onClick={() => this.props.history.push('/study-viewer/project')}
          onClick={() => this.props.history.push('/discovery')}
        >Projects</button>
        <br/><br/>
        <a className='introduction__icon' target='_blank' href='https://forms.gle/DckjEmzHNE5Tj9gR8'><button className='button-primary-white'>Submit Data&ensp;</button></a>
      </div>
    );
  }
}

Introduction.propTypes = {
  data: PropTypes.object.isRequired,
  dictIcons: PropTypes.object.isRequired,
  userAuthMapping: PropTypes.object.isRequired,
};

export default withRouter(Introduction);
