<<<<<<< HEAD
import PropTypes from 'prop-types'
import React, { Component } from 'react'

const HomePageHeading= ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='WeCook'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Enter your search: '
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Search it
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}
=======
import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to="/result">
          <Input action='search' placeholder='Search...' />
        </Link>
      </div>
    );
  }
}

export default HomePage;
>>>>>>> 7afe12283bebe90978b43df6a8e1881e8e7af26f
