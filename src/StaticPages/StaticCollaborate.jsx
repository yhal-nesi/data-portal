import React from 'react';
import { Col, Row } from 'antd';

class StaticCollaborate extends React.Component {
  render() {
    return (
      <div className='protected-content '>
        <div className='index-page'>
          <div className='index-page__top'>
            <Row gutter={16} justify='center' align='middle'>
              <Col className='gutter-row' md={2} />
              <Col className='gutter-row' md={4} sm={24}>
                <img
                  src={'/src/img/Open_To_Collaborate.png'}
                  alt='collaborate icon'
                  width={150}
                  style={{ marginRight: 50 }}
                />
              </Col>
              <Col className='gutter-row' md={2} lg={0} />
              <Col className='gutter-row' md={12} sm={24}>
                <h1>Open to collaborate</h1>
                <p>
                  The Aotearoa Genomic Data Repository is committed to the
                  development of new modes of collaboration, engagement, and
                  partnership with Indigenous peoples for the care and
                  stewardship of past and future heritage collections. What is
                  this notice? Read more{' '}
                  <a
                    href='https://localcontexts.org/#:~:text=Local%20Contexts%20recognizes%20the%20inherent,lands%2C%20territories%2C%20and%20waters'
                    target={'_blank'}
                    rel='noreferrer'
                  >
                    Local Contexts
                  </a>
                  .
                </p>
                If you are interested in collaborating with Indigenous partners
                please contact the AGDR team at{' '}
                <a href='mailto:'>gasupport@nesi.org.nz</a>.
                <br />
              </Col>
              <Col className='gutter-row' md={4} />
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default StaticCollaborate;
