import PropTypes from 'prop-types';
import React, { Component } from 'react';
import parse from 'html-react-parser';
import IconicLink from './buttons/IconicLink';
import './Introduction.less';
import { useArboristUI } from '../configs';
import { userHasMethodOnAnyProject } from '../authMappingUtils';

class Introduction extends Component {
  render() {
    let buttonText = 'Submit Data';
    if (useArboristUI) {
      if (userHasMethodOnAnyProject('create', this.props.userAuthMapping)) {
        buttonText = 'Submit/Browse Data';
      } else {
        buttonText = 'Browse Data';
      }
    }

    return (
      <div className='introduction'>
        <div className='h1-typo introduction__title'>{this.props.data.heading}</div>
        <div className='high-light introduction__text'>{this.props.data.text}</div>
        <a class='introduction__icon' target='' href='/explorer'><button class='button-primary-orange'>Explore&ensp;</button></a>
        <br/><br/>
        <a class='introduction__icon' target='_blank' href='https://forms.gle/DckjEmzHNE5Tj9gR8'><button class='button-primary-white'>Submit Data&ensp;</button></a>
      </div>
    );
  }
}

Introduction.propTypes = {
  data: PropTypes.object.isRequired,
  dictIcons: PropTypes.object.isRequired,
  userAuthMapping: PropTypes.object.isRequired,
};

export default Introduction;
