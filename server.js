import app from './index.js';

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});