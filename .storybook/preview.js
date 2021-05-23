import React from 'react';
import { addDecorator } from '@storybook/react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from '../src/App.styles';

addDecorator(storyFn => <ThemeProvider theme={theme}><CssBaseline />{storyFn()}</ThemeProvider>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}