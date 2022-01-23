import React from 'react';
import {storiesOf} from '@storybook/react-native';

import DropdownList from './DropdownList';

const state = {
    category: [
      {
        name: "test1"
      },
      {
        name: "test2"
      },
    ]
  };

storiesOf('DropdownList', module).add('example', () => <DropdownList listItem={state.category}/>);