export interface qualification {
  id: number;
  title: string;
  comment: string;
  isDone: boolean;
  isPass: boolean;
};

export interface qualificationList {
  list: qualification[]
};