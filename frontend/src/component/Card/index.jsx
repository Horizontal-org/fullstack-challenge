import * as React from 'react';

import Card from './index.style';

const CardComponent = ({ width, height, children, dataTestId }) => (
  <Card data-testid={dataTestId} width={width} height={height}>
    {children && children}
  </Card>
);

export default CardComponent;
