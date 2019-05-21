import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #8b10ae;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  max-height: 400px;
  z-index: 5;
  margin-bottom: 10px;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
export const CardContent = styled.View`
  flex: 1;
  padding: 0 20px;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;
export const Description = styled.Text`
  font-size: 25px;
  margin-top: 3px;
  color: #333;
`;
export const CardFotter = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;
export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
`;
