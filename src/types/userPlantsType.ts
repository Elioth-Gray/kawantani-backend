import { TToken } from './authTypes';

export type TCreateUserPlant = {
  plantId: string;
  user: TToken;
  customName: string;
};

export type TGetDailyTasks = {
  userPlantId: string;
  date?: Date;
  user: TToken;
};

export type TGetPlantDetail = {
  user: TToken;
  userPlantId: string;
};

export type TUpdateProgress = {
  userPlantId: string;
  taskId: number;
  doneStatus: boolean;
  user: TToken;
};

export type TFinishPlant = {
  id: string;
  user: TToken;
};

export type TAddDailyNote = {
  user: TToken;
  plantId: string;
  dayId: number;
  note: string;
};
