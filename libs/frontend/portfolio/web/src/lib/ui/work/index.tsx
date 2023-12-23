import { MonoLabel, MonoText } from '@mono-universe/frontend/shared/design-system'
import { StyledMonoBox } from './styles'

export function Work() {
  const previousPortfolioLink = 'https://ratneshs-tech-attic.netlify.app/'

  const shiningCryptoApp = 'https://shining-crypto.vercel.app/'
  const microEditorApp = 'https://micro-editor.vercel.app/'
  const flexibleSkeletonApp = 'https://flexible-skeleton-loader.vercel.app/'
  const classicCrud = 'https://stunning-pavlova-9834d0.netlify.app/'

  const handleRedirect = (url: string) =>
    window.open(url, '_blank', 'noopener,noreferrer,resizable')

  return (
    <StyledMonoBox>
      <MonoLabel variant="label">Recent projects</MonoLabel>
      <MonoText variant="link" onClick={() => handleRedirect(shiningCryptoApp)}>
        {shiningCryptoApp}
      </MonoText>
      <MonoText variant="link" onClick={() => handleRedirect(flexibleSkeletonApp)}>
        {flexibleSkeletonApp}
      </MonoText>
      <MonoText variant="link" onClick={() => handleRedirect(microEditorApp)}>
        {microEditorApp}
      </MonoText>
      <MonoText variant="link" onClick={() => handleRedirect(classicCrud)}>
        {classicCrud}
      </MonoText>
      <br />
      <MonoLabel variant="label">Previous portfolio</MonoLabel>
      <MonoText variant="link" onClick={() => handleRedirect(previousPortfolioLink)}>
        {previousPortfolioLink}
      </MonoText>
    </StyledMonoBox>
  )
}
