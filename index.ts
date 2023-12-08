import express from 'express';
import fs from 'fs';
import cors from 'cors';
const app = express();
const passwordsData = JSON.parse(fs.readFileSync('passwords.json', 'utf8'));
const passwords = passwordsData.password.split(',');
app.use(cors());
app.get('/', (req, res) => {
  const dirname = path.resolve();
  res.sendFile(path.join(dirname, 'index.html'));
});
app.get('/:password', (req, res) => {
  const password = req.params.password;
  if (passwords.includes(password)) {
    res.json({ message: 'Password is valid' });
  } else {
    res.json({ message: 'Password is invalid' });
  }
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
