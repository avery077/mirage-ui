import React from 'react';
import {storiesOf} from '@storybook/react-native';

import CheckBox from './CheckBox';

storiesOf('Checkbox', module).add('example', () =>  <CheckBox 
selected={true} 
onPress={() => console.log("okokok")}
text='Accept terms and conditions'
/>  );