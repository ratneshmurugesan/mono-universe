import { MonoLabel, MonoText } from '@mono-universe/frontend/shared/design-system'
import { StyledMonoBox } from './styles'

export function Work() {
  const currentPortfolioLink = 'https://mono-universe-ratnesh-murugesan.vercel.app/'
  const currentPortfolioGithubRepoLink = 'https://github.com/ratneshmurugesan/mono-universe'

  const previousPortfolioLink = 'https://ratneshs-tech-attic.netlify.app/'
  const previousPortfolioGithubRepoLink = 'https://github.com/ratneshmurugesan/tech-attic'

  const discoverWebSiteLink = 'https://discover-web-ratnesh-x-app.vercel.app/'

  const assetIntelWebSiteLink = 'https://assetintel-ratnesh-x-app.vercel.app/'

  const handleRedirect = (url: string) =>
    window.open(url, '_blank', 'noopener,noreferrer,resizable')
  return (
    <StyledMonoBox>
      <MonoLabel variant="label">Recent projects</MonoLabel>
      <MonoText variant="link" onClick={() => handleRedirect(discoverWebSiteLink)}>
        {discoverWebSiteLink}
      </MonoText>
      <MonoText variant="link" onClick={() => handleRedirect(assetIntelWebSiteLink)}>
        {assetIntelWebSiteLink}
      </MonoText>
      <br />
      <MonoLabel variant="label">Current portfolio</MonoLabel>
      <MonoText variant="link" onClick={() => handleRedirect(currentPortfolioLink)}>
        {currentPortfolioLink}
      </MonoText>
      <MonoText variant="link" onClick={() => handleRedirect(currentPortfolioGithubRepoLink)}>
        {currentPortfolioGithubRepoLink}
      </MonoText>
      <br />
      <MonoLabel variant="label">Previous portfolio</MonoLabel>
      <MonoText variant="link" onClick={() => handleRedirect(previousPortfolioLink)}>
        {previousPortfolioLink}
      </MonoText>
      <MonoText variant="link" onClick={() => handleRedirect(previousPortfolioGithubRepoLink)}>
        {previousPortfolioGithubRepoLink}
      </MonoText>
    </StyledMonoBox>
  )
}
