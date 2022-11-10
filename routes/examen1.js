const {Router} = require('express')

const router = Router();

router.get('/', (req, res)=> res.send('get endpoint examen'))
router.post('/', (req, res)=> res.send('post endpoint examen'))
router.put('/', (req, res)=> res.send('put endpoint examen'))
router.delete('/', (req, res)=> res.send('delete endpoint examen'))

module.exports = router
