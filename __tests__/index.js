import React from 'react';
import {render} from '@testing-library/react';
import AreaCascader from '..';

describe('test', () => {
  test('basic', () => {
    const result = render(<AreaCascader/>);

    expect(result.container).toMatchSnapshot();
  });
});
