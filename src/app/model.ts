type Talk = {
  id: number,
  title: string,
  speaker: string,
  description: string,
  yourRating: number,
  rating: number,
};

type Filters = {
  speaker: string,
  title: string,
  minRating: number,
};

type AppState = {
  talks: { [id: number]: Talk },
  list: number[],
  filters: Filters,
  watched: { [id: number]: boolean },
};

type State = {
  app: AppState,
};

const intitalState = {
  app: {
    filters: {
      speaker: '',
      title: '',
      minRating: 0,
    },
    talks: {},
    list: [],
    watched: {},
  }
};
