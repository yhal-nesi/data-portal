import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconComponent from './Icon';

const IndexThumbnailButton = styled.div`
  background-color: white;
  display: inline-block;
  height: 360px;
  padding: 20px 20px;
  text-align: center;
  width: 290px;
  margin-left: 20px;
  &:first-child {
    margin-left: 0px;
  }
  position: relative;
`;


const IndexIcon = styled.div`
  vertical-align: middle;
  padding-left: 4px;
`;

const BarItem = styled(Link)`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 30px;
`;

const BarItemA = styled.a`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 30px;
`;

const ThumbnailTitle = styled.div`
  margin-bottom: 15px;
`;

const ThumbnailText = styled.div`
  margin-top: 30px;
  border-top: 1px solid #e7e7e7;
  padding: 10px 10px;
  text-align: left;
`;


/**
 * NavBar renders row of nav-items of form { name, icon, link }
 * @param {dictIcons, buttons} params
 */
class IndexButtonBar extends Component {
  render() {
    return (
      <div style={{ display: 'flex', padding: '40px 0px' }}>
        {
          this.props.buttons.map(
            (item) => {
              const link = item.link.replace('#hostname#', this.props.hostname);
              return (
                <IndexThumbnailButton key={item.name}>
                  <ThumbnailTitle className="h3-typo">{item.name}</ThumbnailTitle>
                  <IndexIcon>
                    <IconComponent
                      dictIcons={this.props.dictIcons}
                      iconName={item.icon}
                      height="90px"
                    />
                  </IndexIcon>
                  <ThumbnailText className="body-typo">{item.body}</ThumbnailText>
                  {
                    link.startsWith('http') ?
                      <BarItemA href={link}>
                        <button
                          className="button-primary-orange"
                          onClick={() => this.props.onActiveTab(link)}
                        >
                          {item.label}
                        </button>
                      </BarItemA> :
                      <BarItem to={link}>
                        <button
                          className="button-primary-orange"
                          onClick={() => this.props.onActiveTab(link)}
                        >
                          {item.label}
                        </button>
                      </BarItem>
                  }
                </IndexThumbnailButton>
              );
            },
          )
        }
      </div>
    );
  }
}

IndexButtonBar.propTypes = {
  dictIcons: PropTypes.object.isRequired,
  buttons: PropTypes.array.isRequired,
  hostname: PropTypes.string.isRequired,
  onActiveTab: PropTypes.func,
};

IndexButtonBar.defaultProps = {
  onActiveTab: () => {},
};

export default IndexButtonBar;
