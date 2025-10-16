# La Cabana Serverless Deployment Guide

## Overview
This application has been restructured to support both local development and serverless deployment, eliminating the need to run a separate backend server.

## Project Structure
```
lacabana/
├── api/
│   └── index.js          # Serverless entry point
├── backend/
│   ├── app.js            # Express app (no listen)
│   ├── server.js         # Local server (with listen)
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── utils/
├── src/
│   └── components/
├── serverless.yml        # Serverless configuration
└── package.json          # Root package.json
```

## Local Development

### Option 1: Traditional Backend (Recommended for development)
```bash
# Terminal 1 - Backend
cd backend
npm install
npm run dev

# Terminal 2 - Frontend
npm install
npm run dev
```

### Option 2: Serverless Offline
```bash
# Install serverless globally
npm install -g serverless

# Install dependencies
npm install

# Run serverless offline
npm run serverless:offline
```

## Serverless Deployment

### Prerequisites
1. Install AWS CLI and configure credentials
2. Install Serverless Framework globally:
   ```bash
   npm install -g serverless
   ```

### Deploy to AWS
```bash
# Install dependencies
npm install
cd backend && npm install && cd ..

# Deploy to AWS
npm run serverless:deploy
```

### Environment Variables
Set these in your serverless deployment:
- `MONGODB_URI`: Your MongoDB connection string

### Update Frontend API URL
After deployment, update the API URL in your frontend components:
```javascript
const API_BASE = process.env.NODE_ENV === 'production' 
  ? 'https://your-actual-api-gateway-url.amazonaws.com/dev/api' 
  : 'http://localhost:5000/api';
```

## Key Features

### MongoDB Connection Optimization
- **Connection Reuse**: MongoDB connections are reused across serverless invocations
- **Connection Pooling**: Optimized for serverless with appropriate pool sizes
- **Graceful Shutdown**: Proper cleanup on function termination

### Serverless Benefits
- **No Server Management**: No need to run backend separately
- **Auto-scaling**: Automatically scales based on demand
- **Cost Effective**: Pay only for actual usage
- **Global Deployment**: Deploy to multiple regions easily

## Development Workflow

1. **Local Development**: Use traditional backend for faster development
2. **Testing**: Use serverless offline for testing serverless behavior
3. **Production**: Deploy to AWS Lambda for production use

## Troubleshooting

### Common Issues
1. **Cold Starts**: First request may be slower due to Lambda cold start
2. **Memory Limits**: Ensure Lambda has enough memory for file uploads
3. **Timeout**: Increase timeout for large file operations

### Monitoring
- Use AWS CloudWatch for monitoring
- Set up alerts for errors and performance
- Monitor MongoDB connection usage

## Security Notes
- Never commit `.env` files
- Use AWS IAM roles for permissions
- Enable CORS appropriately
- Use HTTPS in production
