import { MonoLabel, MonoText } from '@mono-universe/frontend/shared/design-system'
import { StyledMonoBox } from './styles'

export function Contact() {
  const handleRedirect = (url: string) =>
    window.open(url, '_blank', 'noopener,noreferrer,resizable')
  return (
    <StyledMonoBox>
      <StyledMonoBox>
        <MonoLabel variant="label">Email</MonoLabel>
        <MonoText variant="link">ratnesh.one@gmail.com</MonoText>
      </StyledMonoBox>

      <StyledMonoBox>
        <MonoLabel variant="label">Mobile</MonoLabel>
        <MonoText variant="link">+91 96777 29198</MonoText>
      </StyledMonoBox>

      <StyledMonoBox>
        <MonoLabel variant="label">Linkedin</MonoLabel>
        <MonoText
          variant="link"
          onClick={() => handleRedirect('https://www.linkedin.com/in/ratnesh-murugesan/')}
        >
          https://www.linkedin.com/in/ratnesh-murugesan/
        </MonoText>
      </StyledMonoBox>

      <StyledMonoBox>
        <MonoLabel variant="label">Github</MonoLabel>
        <MonoText
          variant="link"
          onClick={() => handleRedirect('https://github.com/ratneshmurugesan')}
        >
          https://github.com/ratneshmurugesan
        </MonoText>
      </StyledMonoBox>
    </StyledMonoBox>
  )
}
