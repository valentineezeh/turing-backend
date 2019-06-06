import express from 'express';
// eslint-disable-next-line import/no-cycle
import DepartmentControllers from '../../controllers/DepartmentControllers';
import verifyUserInput from '../../middlewares/verifyInputs';

const router = express.Router();

router.get('/departments', DepartmentControllers.GetAllDepartments);
router.get('/departments/:department_id', verifyUserInput.getDepartmentId, DepartmentControllers.GetDepartmentById);

export default router;
