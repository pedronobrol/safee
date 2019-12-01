import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Title,
  Description,
  Bottom,
  ScanButton,
  ScanButtonText,
  BoldWord,
  PromoImage,
} from './styles';

export default class Main extends Component {
  // static navigationOptions = {
  //   title: 'Escanear Producto',
  // };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleNavigate = () => {
    const { navigation } = this.props;

    navigation.navigate('PScan');
  };

  render() {
    return (
      <Container>
        <Title>Cuida tu salud</Title>
        <BoldWord>Evita sustancias tóxicas.</BoldWord>
        <Description>
          Pulsa en «escanear código» y captura el código de barras del producto
          con tu cámara.
        </Description>

        <PromoImage source={require('../../assets/pot.png')} />
        <Bottom>
          <ScanButton onPress={this.handleNavigate}>
            <ScanButtonText>Escanear código</ScanButtonText>

            <Icon name="barcode-scan" size={30} color="#EA5276" />
          </ScanButton>
        </Bottom>
      </Container>
    );
  }
}
