import express from 'express';
import postRoutes from './routes/posts';
import userRoutes from './routes/users';
import { initializeData } from './data/storage';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const app = express();
const PORT = 3333;

const swaggerDocument = YAML.load('./openapi.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

initializeData();

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

app.use((err: Error, req: express.Request, res: express.Response, next: any) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Blog API server running on http://localhost:${PORT}`);
  console.log('\nAvailable endpoints:');
  console.log('  GET    /api/posts');
  console.log('  GET    /api/posts/:id');
  console.log('  POST   /api/posts');
  console.log('  PUT    /api/posts/:id');
  console.log('  DELETE /api/posts/:id');
  console.log('  GET    /api/users/:id/posts');
  console.log('  API docs available at /api-docs');
});

export default app;
