import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RNCamera } from 'react-native-camera';
import { Container, Title } from './styles';
// import api from '../../services/api';

export default class User extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  barcodeRecognized = e => {
    const { data } = e;

    // Handling Navigation:

    const { navigation } = this.props;

    navigation.navigate('PInfo', { data });
  };
  // async componentDidMount() {
  //   const { navigation } = this.props;
  //   const user = navigation.getParam('user');

  //   const response = await api.get(`/users/${user.login}/starred`);

  //   this.setState({ stars: response.data });
  // }

  render() {
    return (
      <Container>
        <Title>
          Capture el código de barras con la cámara para averiguar la toxicidad
          del producto.
        </Title>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
            width: '100%',
          }}
          onBarCodeRead={this.barcodeRecognized}
        />
      </Container>
    );
  }
}
