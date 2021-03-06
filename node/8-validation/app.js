import express from 'express';
import { body, validationResult, param } from 'express-validator';


const app = express();
app.use(express.json());

app.post('/users', 
        [
          body('name').isLength({min:2}).withMessage('이름은 두글자 이상~~!')
          , body('age').isInt().withMessage('숫자 입력해')
          , body('email').isEmail().withMessage('이메일 입력해')
          , body('job.name').notEmpty()
        ]
        , (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({message: errors.array()});
  }
  console.log(req.body);
  res.sendStatus(201);
});

app.get('/:email', param('email').isEmail().withMessage('이메일 입력해'), (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({message: errors.array()});
  }
  res.send('mail~');
});

app.listen(8080);