import asyncHandler from 'express-async-handler';
import { Router } from 'express';
import { Reservation } from '../../db/models';

const router = Router();

router.get('/:day(\\d+)/:month(\\d+)/:year(\\d+)/', asyncHandler(async (req, res) => {
  const { params: { day, month, year } } = req;

  res.json({
    reservation: await Reservation.findOne({
      where: {
        day,
        month,
        year
      }
    })
  });
}));

router.post('/', asyncHandler(async (req, res) => {
  const { body: { day, month, year } } = req;

  res.json({
    reservation: await Reservation.create({
      day,
      month,
      year
    })
  });
}));

export default router;
