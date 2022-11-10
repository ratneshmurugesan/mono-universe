import { MonoLabel, MonoText } from '@mono-universe/frontend/shared/design-system'

export function Work() {
  const handleRedirect = (url: string) =>
    window.open(url, '_blank', 'noopener,noreferrer,resizable')
  return (
    <>
      <MonoLabel variant="label">Previous portfolio</MonoLabel>
      <MonoText
        variant="link"
        onClick={() => handleRedirect('https://ratneshs-tech-attic.netlify.app/')}
      >
        https://ratneshs-tech-attic.netlify.app/
      </MonoText>
    </>
  )
}
