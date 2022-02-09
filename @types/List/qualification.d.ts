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

export interface fetchQualification {
  title: { stringValue: string; },
  comment: { stringValue: string; },
  isDone: { booleanValue: boolean; },
  isPass: { booleanValue: boolean },
};

export interface fetchQualificationList {
  list: fetchQualification[]
};