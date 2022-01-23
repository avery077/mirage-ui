import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Link from './Link';

storiesOf('Link', module).add('example', () => <Link url="https://google.com" />);