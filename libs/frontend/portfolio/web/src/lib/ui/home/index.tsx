import { MonoBox, MonoFlexBox, MonoText } from '@mono-universe/frontend/shared/design-system'
import { StyledMonoFlexBox } from './styles'

export const Home = () => {
  return (
    <MonoBox height="100%" minWidth={0}>
      <MonoFlexBox variant="flexRow" justifyContent="center">
        <MonoText variant="paragraph2">[WHO AM I]</MonoText>
      </MonoFlexBox>
      <StyledMonoFlexBox variant="flexRow">
        <MonoText variant="heading1">A human-first*, Frontend/UI Web Developer.</MonoText>
      </StyledMonoFlexBox>
      <MonoFlexBox variant="flexRow" justifyContent="center">
        <MonoText variant="paragraph2">
          “Give me six hours to chop down a tree and I will spend the first four sharpening the
          axe.” - Abraham Lincoln
        </MonoText>
      </MonoFlexBox>
    </MonoBox>
  )
}
