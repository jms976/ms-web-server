import express from 'express';

import { memberList, getMemberById, updateMemberState, updateMemberConfig, updateMemberLicense } from '../../../../controllers/member';
const router = express.Router();

router.get('/', memberList);
router.get('/:memberId', getMemberById);
router.put('/:memberId/state', updateMemberState);
router.put('/:memberId/config', updateMemberConfig);
router.put('/:memberId/license', updateMemberLicense);

export default router;
