import { fastify } from 'fastify';
import cors from '@fastify/cors';
import { getAllPromptsRoute } from './routes/get-all-prompt';
import { uploadVideoRoute } from './routes/upload-video';
import { createTranscriptionRoute } from './routes/create-transcription';
import { generateAICompletionRoute } from './routes/generate-ai-completion';
const app = fastify();

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);
app.register(cors, {
  origin: '*',
});

app
  .listen({
    port: 5432,
  })
  .then((address) => {
    console.log(`Server is listening on ${address}`);
  });
