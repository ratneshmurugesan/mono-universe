import useSound from 'use-sound'

export const useSoundSystem = () => {
  const [playOnButtonClick] = useSound('assets/sounds/ui-click1.mp3', {
    playbackRate: 2,
    volume: 1,
  })
  const [playOnButtonRelease] = useSound('assets/sounds/ui-click1.mp3', {
    playbackRate: 3,
    volume: 0.75,
  })

  return {
    playOnButtonClick,
    playOnButtonRelease,
  }
}
