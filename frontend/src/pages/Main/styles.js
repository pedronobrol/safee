import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Bottom = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;
export const Description = styled.Text.attrs({})`
  font-size: 20px;
  line-height: 24px;
  color: #999;
  margin-top: 15px;
  text-align: center;
`;

export const BoldWord = styled.Text.attrs({})`
  font-size: 20px;
  line-height: 24px;
  color: #999;
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
`;
export const ScanButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #fff;
  justify-content: space-around;
  align-items: center;
  height: 46px;
  flex-direction: row;
  border: 0.4px solid;
`;
export const ScanButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7159c1;
  text-transform: uppercase;
`;

export const PromoImage = styled.Image`
  align-self: center;
  margin-top: 39px;
`;
