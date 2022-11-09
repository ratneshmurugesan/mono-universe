import { MonoLabel, MonoText } from '@mono-universe/frontend/shared/design-system'

function About() {
  return (
    <>
      <br />
      <MonoLabel variant="label">Ingredients to prepare this site</MonoLabel>
      <MonoText variant="heading2">- react + javascript + typescript + hooks</MonoText>
      <MonoText variant="heading2">- css grid & flex</MonoText>
      <MonoText variant="heading2">- react routing - nested, dynamic</MonoText>
      <MonoText variant="heading2">
        - react aria UI elements with full accessibility support
      </MonoText>
      <MonoText variant="heading2">
        - some unit, integration, e2e tests with jest, react testing/library and cypress
      </MonoText>
      <MonoText variant="heading2">- Nrwl NX - monorepo build system</MonoText>
      <MonoText variant="heading2">
        - several parts of frontend architectural design patterns
      </MonoText>
      <MonoText variant="heading2">- tech agnostic design tokens & design system</MonoText>
      <MonoText variant="heading2">- custom design system with custom component library</MonoText>
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
      <MonoText variant="heading2">- 3D design tokens and design system</MonoText>
    </>
  )
}

export default About
