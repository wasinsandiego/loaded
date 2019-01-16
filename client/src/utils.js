export const mungeDataInfluencerItem = data => data ? {
  id: data.id,
  thumbUrl: data.avatar,
  title: data.handle,
  subTitle: `${data.twitchViewers || 0} Twitch Viewers`
} : {}
