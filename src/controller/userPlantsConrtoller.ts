import { Request, Response } from 'express';
import { IReqUser } from '../middlewares/authMiddleware';
import {
  createUserPlant,
  finishPlant,
  getTodayTasks,
  getUserDailyTasks,
  getUserPlant,
  getUserPlantDetail,
  updateTaskProgress,
  addDailyNote,
} from '../services/userPlantsService';

export const create = async (req: IReqUser, res: Response) => {
  const { plantId, customName } = req.body;
  const user = req.user;
  if (!user) {
    throw { status: 400, message: 'Invalid' };
  }

  const data = {
    plantId,
    user,
    customName,
  };
  try {
    const plant = await createUserPlant(data);

    res.status(200).json({
      message: 'Tanaman berhasil dibuat!',
      data: plant,
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};

export const getPlant = async (req: IReqUser, res: Response) => {
  const user = req.user;
  if (!user) {
    throw { status: 400, message: 'Invalid' };
  }

  try {
    const plant = await getUserPlant(user);

    res.status(200).json({
      message: 'Tanaman berhasil didapatkan',
      data: plant,
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};

export const getPlantDetail = async (req: IReqUser, res: Response) => {
  const user = req.user;
  if (!user) {
    throw { status: 400, message: 'Invalid' };
  }
  const { id } = req.params;
  const data = {
    user,
    userPlantId: id,
  };
  try {
    const plant = await getUserPlantDetail(data);

    res.status(200).json({
      message: 'Tanaman berhasil didapatkan',
      data: plant,
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};

export const getDailyTasks = async (req: IReqUser, res: Response) => {
  const { date } = req.body;
  const user = req.user;
  if (!user) {
    throw { status: 400, message: 'Invalid' };
  }
  const { id } = req.params;
  const data = {
    userPlantId: id,
    date,
    user,
  };
  try {
    const plant = await getUserDailyTasks(data);

    res.status(200).json({
      message: 'Tugas Harian berhasil didapatkan',
      data: plant,
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};

export const updateTask = async (req: IReqUser, res: Response) => {
  const { userPlantId, taskId } = req.params;
  const { doneStatus } = req.body;
  const user = req.user;
  if (!user) {
    throw { status: 400, message: 'Invalid' };
  }
  const data = {
    userPlantId,
    taskId: parseInt(taskId, 10),
    user,
    doneStatus,
  };
  try {
    const plant = await updateTaskProgress(data);

    res.status(200).json({
      message: 'Berhasil mengupdate tugas',
      data: plant,
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};

export const getToday = async (req: IReqUser, res: Response) => {
  const user = req.user;
  if (!user) {
    throw { status: 400, message: 'Invalid' };
  }
  try {
    const plant = await getTodayTasks(user);

    res.status(200).json({
      message: 'Berhasil mendapatkan tugas',
      data: plant,
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};

export const finish = async (req: IReqUser, res: Response) => {
  const { id } = req.params;
  const user = req.user;
  if (!user) {
    throw { status: 400, message: 'Invalid' };
  }
  const data = {
    id,
    user,
  };
  try {
    const plant = await finishPlant(data);

    res.status(200).json({
      message: 'Tanaman berhasil diselesaikan',
      data: plant,
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};

export const note = async (req: IReqUser, res: Response) => {
  const { plantDayId, userPlantId } = req.params;
  const user = req.user;
  const { note } = req.body;
  if (!user) {
    throw { status: 400, message: 'Invalid' };
  }
  const parsedId = parseInt(plantDayId, 10);
  const data = {
    plantId: userPlantId,
    dayId: parsedId,
    user,
    note,
  };
  try {
    const plant = await addDailyNote(data);

    res.status(200).json({
      message: 'Catatan berhasil di',
      data: plant,
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};
