import { MonoLabel, MonoText } from '@mono-universe/frontend/shared/design-system'
import { StyledMonoBox } from './styles'

export function Work() {
  const currentPortfolioLink = 'https://mono-universe-ratnesh-murugesan.vercel.app/'
  const currentPortfolioGithubRepoLink = 'https://github.com/ratneshmurugesan/mono-universe'

  const previousPortfolioLink = 'https://ratneshs-tech-attic.netlify.app/'
  const previousPortfolioGithubRepoLink = 'https://github.com/ratneshmurugesan/tech-attic'

  const handleRedirect = (url: string) =>
    window.open(url, '_blank', 'noopener,noreferrer,resizable')
  return (
    <StyledMonoBox>
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
