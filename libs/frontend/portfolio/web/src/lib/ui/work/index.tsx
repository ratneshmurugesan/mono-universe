import { MonoLabel, MonoText } from '@mono-universe/frontend/shared/design-system'
import { StyledMonoBox } from './styles'

export function Work() {
  const previousPortfolioLink = 'https://ratneshs-tech-attic.netlify.app/'

  const oceanCardWalletApp = 'https://ocean-card-wallet.vercel.app/'
  const shiningCryptoApp = 'https://shining-crypto.vercel.app/'
  const microEditorApp = 'https://micro-editor.vercel.app/'
  const flexibleSkeletonApp = 'https://flexible-skeleton-loader.vercel.app/'
  const classicCrud = 'https://stunning-pavlova-9834d0.netlify.app/'

  const handleRedirect = (url: string) =>
    window.open(url, '_blank', 'noopener,noreferrer,resizable')

  return (
    <StyledMonoBox>
      <MonoLabel variant="label">Recent projects</MonoLabel>
      <MonoText variant="link" onClick={() => handleRedirect(oceanCardWalletApp)}>
        Ocean Card Wallet - make sense when viewed in smaller screen
      </MonoText>
      <MonoText variant="link" onClick={() => handleRedirect(shiningCryptoApp)}>
        Shining Crypto
      </MonoText>
      <MonoText variant="link" onClick={() => handleRedirect(flexibleSkeletonApp)}>
        Flexible Skeleton Loader
      </MonoText>
      <MonoText variant="link" onClick={() => handleRedirect(microEditorApp)}>
        Micro Editor
      </MonoText>
      <MonoText variant="link" onClick={() => handleRedirect(classicCrud)}>
        Classic CRUD
      </MonoText>
      <br />
      <MonoLabel variant="label">Previous portfolio</MonoLabel>
      <MonoText variant="link" onClick={() => handleRedirect(previousPortfolioLink)}>
        {previousPortfolioLink}
      </MonoText>
    </StyledMonoBox>
  )
}
