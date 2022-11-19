import { MonoGridBox, MonoLabel, MonoText } from '@mono-universe/frontend/shared/design-system'

function About() {
  return (
    <MonoGridBox overflow="auto">
      <br />
      <MonoLabel variant="label">Things used to prepare this site</MonoLabel>
      <MonoText variant="heading2">- react + javascript + typescript + hooks</MonoText>
      <MonoText variant="heading2">- css grid & flex</MonoText>
      <MonoText variant="heading2">- react routing - nested, dynamic</MonoText>
      <MonoText variant="heading2">
        - react-aria UI elements with full accessibility support
      </MonoText>
      <MonoText variant="heading2">
        - some unit, integration, e2e tests with jest, react testing/library and cypress
      </MonoText>
      <MonoText variant="heading2">- Nrwl NX - monorepo build system</MonoText>
      <MonoText variant="heading2">
        - several parts of frontend architectural design patterns
      </MonoText>
      <MonoText variant="heading2">
        - tech agnostic design tokens & custom design system with custom component library
      </MonoText>
      <MonoText variant="heading2">- styled components + styled system</MonoText>
      <MonoText variant="heading2">- sound system</MonoText>
      <MonoText variant="heading2">- git & github workflows</MonoText>
      <MonoText variant="heading2"> and a few magic ingredients*</MonoText>
      <br />
      <MonoLabel variant="label">Coming soon...</MonoLabel>
      <MonoText variant="heading2">
        - more heavy UI elements with react compound component pattern
      </MonoText>
      <MonoText variant="heading2">- more sounds to enhance UX</MonoText>
      <MonoText variant="heading2">- Storybook integration and with chromatic</MonoText>
      <MonoText variant="heading2">- design tokens for 3D UIs</MonoText>
    </MonoGridBox>
  )
}

export default About
