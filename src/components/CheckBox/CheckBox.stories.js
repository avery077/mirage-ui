import React from 'react';
import {storiesOf} from '@storybook/react-native';

import CheckBox from './CheckBox';

storiesOf('Checkbox', module).add('example', () =>  <CheckBox 
onPress={() => console.log()}
text='test CheckBox'
/>  );