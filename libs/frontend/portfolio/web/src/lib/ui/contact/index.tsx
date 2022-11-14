import { MonoLabel, MonoText } from '@mono-universe/frontend/shared/design-system'

export function Contact() {
  const handleRedirect = (url: string) =>
    window.open(url, '_blank', 'noopener,noreferrer,resizable')
  return (
    <>
      <MonoLabel variant="label">Email</MonoLabel>
      <MonoText variant="link">ratnesh.one@gmail.com</MonoText>
      <MonoLabel variant="label">Mobile</MonoLabel>
      <MonoText variant="link">+91 96777 29198</MonoText>
      <MonoLabel variant="label">Linkedin</MonoLabel>
      <MonoText
        variant="link"
        onClick={() => handleRedirect('https://www.linkedin.com/in/ratnesh-murugesan/')}
      >
        https://www.linkedin.com/in/ratnesh-murugesan/
      </MonoText>
      <MonoLabel variant="label">Github</MonoLabel>
      <MonoText
        variant="link"
        onClick={() => handleRedirect('https://github.com/ratneshmurugesan')}
      >
        https://github.com/ratneshmurugesan
      </MonoText>
    </>
  )
}
