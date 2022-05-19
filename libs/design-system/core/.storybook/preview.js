export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      showName: true,
    },
  },
  containerSize: {
    name: 'Container size',
    description: "Global container's size",
    defaultValue: 'xs',
    toolbar: {
      icon: 'circlehollow',
      items: ['xs', 'sm', 'md', 'lg', 'xl'],
      showName: true,
    },
  },
}

// const themes = {
//   light: theme,
//   dark: theme,
// };

// const withThemeProvider = (Story, context) => {
//   const storybookEnvTheme = themes[context.globals.theme];
//   console.log({ storybookEnvTheme });
//   return (
//     <ThemeProvider theme={storybookEnvTheme}>
//       <StorybookGlobalStyle />
//       <Story />
//     </ThemeProvider>
//   );
// };

// addDecorator(withThemeProvider);
// export const decorators = [withThemeProvider];
