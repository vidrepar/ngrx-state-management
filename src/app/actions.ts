type TalksUpdated = {
  type: 'TALKS_UPDATED',
  payload: {
    talks: { [id: number]: Talk },
    list: number[],
  },
  filters: Filters,
};

type TalkUpdated = {
  type: 'TALK_UPDATED',
  payload: Talk,
};

type Watch = {
  type: 'WATCH',
  payload: { talkId: number },
};

type TalkWatched = {
  type: 'TALK_WATCHED',
  payload: { talkId: number },
};

type Rate = {
  type: 'RATE',
  payload: { talkId: number, rating: number },
};

type Unrate = {
  type: 'UNRATE',
  payload: { talkId: number, error: any },
};

type Action = RouterAction<State> | TalksUpdated | TalkUpdated | Watch | TalkWatched | Rate | Unrate;
