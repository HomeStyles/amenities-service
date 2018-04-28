import styled from 'styled-components';

export const AppContainer = styled.div`
  box-sizing: content-box;
  margin-left: 60px;
  width: 650px;
  @media (max-width: 650px) {
    width: 90%;
  }
`;

export const UppercaseText = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.2px;
  line-height: 16px;
  text-transform: uppercase;
  color: #a02f18;
`;

export const Header = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 0.2px;
  line-height: 1.4;
  text-transform: none;
  color: #484848;
  padding-right: 10px;
  padding-bottom: 5px;
  width: 90%;
`;

export const LargeHeader = Header.extend`
  font-size: 36px;
  padding-bottom: 20px;
`;

export const Text = Header.extend`
  font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.43;
  letter-spacing: 0.3px;
  float: left;
`;

export const LargeText = Text.extend`
  font-size: 20px;
  padding-bottom: 20px;
`;

export const HiddenText = Text.extend`
  height: 7em;
  overflow: hidden;
`;

export const BoldText = Text.extend`
  font-weight: bold;
  padding-bottom: 5px;
`;

export const BoxText = Text.extend`
  width: 100%;
`;

export const BlueLink = Text.extend`
  margin-top: 10px;
  font-weight: 400;
  color: #008489;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const List = styled.div`
  font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.43;
  margin-left: 10px;
`;

export const Box = styled.div`
  float: left;
  padding: 15px 10px 10px 20px;
  margin-top: 5px;
  margin-bottom: 20px;
  width: 75%;
  border: 1px solid #c4c4c4;
  border-radius: 2px;
`;

export const Stats = Box.extend`
  border: none;
  margin-bottom: 10px;
`;

export const RoundPhoto = styled.div`
  float: right;
`;

export const GrayDivider = styled.hr`
  background-color: #c4c4c4;
  border-bottom: 1px;
  width: 90%;
  float: left;
  margin-bottom: 20px;
`;
