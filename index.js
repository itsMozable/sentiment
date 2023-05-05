// Import open ai module
import { Configuration, OpenAIApi } from 'openai';

// Import from module sentiment
//import Sentiment from 'sentiment';
//const sentiment = new Sentiment();
// Initialize Key from open AI Website
const config = new Configuration({
  apiKey: '',
});
const openai = new OpenAIApi(config);
// Define Answer from Open AI

const runPrompt = async (input) => {
  // const prompt = inputArgument;
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'What is the sentiment of this: ' + input,
    max_tokens: 50,
    temperature: 1,
  });
  return response;
};
const inputArgument = process.argv[2];
const answer = await runPrompt(inputArgument);
console.log(answer.data);
//const analyze = sentiment.analyze(answer.data);
//console.log(analyze);

/* if (sentiment === 'Positive') {
  console.log(`Confidence: 90%`);
  console.log(`Negative: 5%`);
  console.log(`Neutral: 5%`);
} else if (sentiment === 'Negative') {
  console.log(`Confidence: 85%`);
  console.log(`Positive: 5%`);
  console.log(`Neutral: 10%`);
} else {
  console.log(`Confidence: 80%`);
  console.log(`Positive: 5%`);
  console.log(`Negative: 15%`);
} */
