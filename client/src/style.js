import styled from 'styled-components';

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
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.2px;
  line-height: 22px;
  text-transform: none;
  color: #484848;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 90%;
`;

export const Text = Header.extend`
  font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.43;
`;

export const HiddenText = Text.extend`
  height: 7em;
  overflow: hidden;
`;

export const PaddedText = Text.extend`
  padding-bottom: 10x;
`;

export const BoldText = Text.extend`
  font-weight: bold;
  padding-bottom: 5px;
`;

export const BoxText = Text.extend`
  width: 100%;
`;

export const BlueLink = Text.extend`
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
  font-size: 14px;
  line-height: 1.43;
  margin-left: 10px;
`;

export const Box = styled.div`
  float: left;
  padding: 10px 10px 10px 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  margin-right: 1000px;
  width: 75%;
  border: 1px solid #c4c4c4;
  border-radius: 2px;
`;

export const InlineBox = Box.extend`
  border: none;
  display: inline-block;
`;

export const Stats = Box.extend`
  border: none;
  margin-bottom: 10px;
`;

export const RoundPhoto = styled.div`
  float: right;
`;

export const GrayDivider = styled.hr`
  color: #c4c4c4;
  border-bottom: 1px;
  width: 90%;
  float: left;
  margin-right: 1000px;
  margin-bottom: 20px;
`;
