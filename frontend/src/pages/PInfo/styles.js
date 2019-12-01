import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 20px;
`;

export const Product = styled.View`
  justify-content: center;
  margin: 0 20px 30px;
  flex-direction: row;
  border-bottom-color: #ea5276;
  border-bottom-width: 0.3px;
  margin-bottom: 10px;
  padding: 10px;
  background: #fff;
`;

export const PRisk = styled.View`
  margin: 0 10px 15px;
  border: 0.5px solid #ea5276;
  padding: 10px;
  border-radius: 10px;
  background: #fff;
`;

export const PImage = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  background: #eee;
  margin-right: 12px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const ListTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7159c1;
  text-transform: uppercase;
`;

export const ToxicityFont = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.inputColor};
  text-transform: uppercase;
`;
