import * as React from 'react';

import Card from '../../../../component/Card';

import Row from '../../../../component/Row/index.style';

import { UserCardCol } from './index.style';

const ImageCardComponent = ({ user: image, onClick }) => (
  <Card height="250px" dataTestId="user-card" width="350px">
    <Row>
      <UserCardCol span={4}></UserCardCol>

      <UserCardCol span={16}>
        <img alt={`${image?.links[0].href}`} src={`${image?.links[0].href}`} />
      </UserCardCol>
    </Row>
    <button onCLick={onClick}>Save</button>
    <Row></Row>
  </Card>
);
export default ImageCardComponent;