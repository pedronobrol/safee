import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { View, ActivityIndicator, StyleSheet } from 'react-native';

import api from '../../services/api';
import { eCodes, drugName, risk } from '../../data/eData';

import {
  Container,
  PImage,
  Title,
  Product,
  PRisk,
  List,
  ListTitle,
  ToxicityFont,
} from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default class PInfo extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    product: {},
    loading: true,
    loadingRisk: true,
    probablySafe: false,
    palmOil: false,
    chemicalInfoList: {},
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const code = navigation.getParam('data');

    const response = await api.openfoodfacts.get(
      `/api/v0/product/${code}.json`
    );

    const data = {
      name: response.data.product.product_name,
      ingredientsText: response.data.product.ingredients_text,
      ingredientsImage: response.data.product.image_ingredients_thumb_url,
      palmOil: response.data.product.ingredients_that_may_be_from_palm_oil_n,
      image: response.data.product.image_front_url,
    };

    this.setState({ product: data, loading: false });

    this.CheckToxicity(data.ingredientsText);
  }

  CheckToxicity = ingredientsText => {
    let color;
    let icon;
    const chemicalList = [];
    let cleanedData = ingredientsText.replace(/[^a-z\d\s]+/gi, '');
    cleanedData = cleanedData.toLowerCase().replace(/\s/g, '');

    console.tron.log(cleanedData);

    for (let i = 0; i < eCodes.length; i++) {
      // Checking for palmOil
      if (cleanedData.includes('palme') || cleanedData.includes('palma')) {
        this.setState({ palmOil: true });
      }

      // Checking for E Codes

      if (cleanedData.includes(eCodes[i].toLowerCase())) {
        if (risk[i] === 'Alta') {
          color = '#BD3D3A';
          icon = 'skull-crossbones';
        } else if (risk[i] === 'Baja') {
          color = '#88B04B';
          icon = 'emoticon-happy-outline';
        } else if (risk[i] === 'Media') {
          color = '#F6D155';
          icon = 'emoticon-neutral-outline';
        } else {
          color = '#999';
          icon = 'account-question-outline';
        }

        const chemicalInfo = {
          riskLevel: risk[i],
          drugName: drugName[i],
          eCode: eCodes[i],
          color,
          icon,
        };
        chemicalList.push(chemicalInfo);
      }
    }

    if (chemicalList.length) {
      this.setState({
        loadingRisk: false,
        chemicalInfoList: chemicalList,
      });

      return 1;
    }

    this.setState({ probablySafe: true, loadingRisk: false });
    return 1;
  };

  render() {
    const {
      product,
      loading,
      loadingRisk,
      chemicalInfoList,
      probablySafe,
    } = this.state;

    const { name, palmOil, image } = product;

    console.tron.log(product);

    return (
      <Container>
        {loading ? (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#EA5276" />
          </View>
        ) : (
          <Product>
            <PImage
              source={{
                uri: image,
              }}
            />
            <Title>{name}</Title>
          </Product>
        )}
        <>
          {!loading && loadingRisk && (
            <View style={{ marginTop: 20 }}>
              <ActivityIndicator color="#EA5276" />
            </View>
          )}

          {!loading && !loadingRisk && probablySafe && !palmOil && (
            <Title>
              No hemos detectado ninguna sustancia tóxica en este alimento.
            </Title>
          )}
          {palmOil && (
            <ListTitle style={{ marginTop: 20, marginBottom: 20 }}>
              Este prodcuto contiene aceite de palma.
            </ListTitle>
          )}
          {!loading && !loadingRisk && !probablySafe && (
            <>
              <Title>Hemos detectado la presencia de:</Title>
              <List
                data={chemicalInfoList}
                keyExtractor={chemical => chemical.eCode}
                renderItem={({ item }) => (
                  <PRisk>
                    <ListTitle>
                      {item.drugName}({item.eCode}).
                    </ListTitle>
                    <ListTitle>
                      Toxicidad:{' '}
                      <ToxicityFont inputColor={item.color}>
                        {item.riskLevel}{' '}
                      </ToxicityFont>
                      <Icon name={item.icon} size={30} color={item.color} />
                    </ListTitle>
                  </PRisk>
                )}
              />
            </>
          )}
        </>
      </Container>
    );
  }
}
