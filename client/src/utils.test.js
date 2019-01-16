import { mungeDataInfluencerItem } from './utils'

it('mungeDataInfluencerItem doesn\'t bomb out with no args', () => {
  expect(mungeDataInfluencerItem).not.toThrow()
})

it('mungeDataInfluencerItem handles no twitch viewers', () => {
  const item = {
    id: 420,
    handle: 'HorseBadorties',
    avatar: 'http://stuff.com/avatar.png'
  }
  expect(mungeDataInfluencerItem(item)).toEqual({
    id: 420,
    thumbUrl: 'http://stuff.com/avatar.png',
    title: 'HorseBadorties',
    subTitle: `0 Twitch Viewers`
  })
})

it('mungeDataInfluencerItem has and does all the things we need', () => {
  const item = {
    id: 420,
    handle: 'HorseBadorties',
    avatar: 'http://stuff.com/avatar.png',
    twitchViewers: 753
  }
  expect(mungeDataInfluencerItem(item)).toEqual({
    id: 420,
    thumbUrl: 'http://stuff.com/avatar.png',
    title: 'HorseBadorties',
    subTitle: `753 Twitch Viewers`
  })
})
