import { MonoText } from '@mono-universe/frontend/shared/design-system'
import { StyledMonoBox } from './styles'

export const Home = () => {
  return (
    <StyledMonoBox>
      <MonoText variant="paragraph2">[WHO AM I]</MonoText>
      <MonoText variant="heading1">A human-first*, Frontend/UI Web Developer.</MonoText>
      <MonoText variant="paragraph2">
        “Give me six hours to chop down a tree and I will spend the first four sharpening the axe.”
        - Abraham Lincoln
      </MonoText>
    </StyledMonoBox>
  )
}
