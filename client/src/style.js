import styled from 'styled-components';

export const UppercaseText = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 16px;
  text-transform: uppercase;
  color: #a02f18;
`;

export const Header = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0.2px;
  line-height: 22px;
  text-transform: none;
  color: #484848;
`;

export const Text = Header.extend`
  font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.43;
`;

export const BlueLink = Text.extend`
  font-weight: 400;
  color: #008489;
`;

export const Box = styled.div`
  float: left;
  padding: 5px 10px 5px 10px;
  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-right: 1000px;
  width: 300px;
  border: 1px solid #c4c4c4;
  border-radius: 2px;
`;

export const Stats = Box.extend`
  border: none;
  margin-bottom: 10px;
`;

export const RoundPhoto = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
  width: 50%;
  height: 50%;
  border-radius: 50%;
`;