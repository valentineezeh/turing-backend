import express from 'express';
// eslint-disable-next-line import/no-cycle
import DepartmentControllers from '../../controllers/DepartmentControllers';

const router = express.Router();

router.get('/departments', DepartmentControllers.GetAllDepartments);
router.get('/departments/:departmentId', DepartmentControllers.GetDepartmentById);

export default router;
