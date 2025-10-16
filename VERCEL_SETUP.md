# Vercel Deployment Setup for La Cabana

## Environment Variables Setup

### In Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the following variables:

```
MONGODB_URI = mongodb+srv://lacabana:WhDMPixkm9xNYp1U@cluster0.teh5mkr.mongodb.net/
```

### For Production:
- Set the environment to "Production"
- Make sure the variable is available for all environments

## Project Structure for Vercel:
```
lacabana/
├── api/
│   ├── index.js          # Vercel serverless function
│   └── package.json      # API dependencies
├── backend/
│   ├── app.js            # Express app
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── utils/
├── src/
│   └── components/
├── vercel.json           # Vercel configuration
└── package.json          # Root dependencies
```

## Deployment Steps:

1. **Push to Git Repository:**
   ```bash
   git add .
   git commit -m "Add Vercel configuration"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Import your Git repository in Vercel
   - Vercel will automatically detect the configuration

3. **Set Environment Variables:**
   - Add `MONGODB_URI` in Vercel dashboard
   - Redeploy if needed

## API Endpoints:
- Frontend: `https://your-app.vercel.app`
- API: `https://your-app.vercel.app/api/pdfs`
- Admin: `https://your-app.vercel.app/admin`

## Troubleshooting:

### If Admin Panel Still Not Working:

1. **Check Environment Variables:**
   - Verify `MONGODB_URI` is set correctly
   - Check Vercel function logs

2. **Test API Directly:**
   ```bash
   curl https://your-app.vercel.app/api/health
   ```

3. **Check Browser Console:**
   - Look for CORS errors
   - Check network requests

4. **Common Issues:**
   - Missing environment variables
   - CORS configuration
   - MongoDB connection string format

## Local Testing:
```bash
# Install Vercel CLI
npm i -g vercel

# Test locally
vercel dev
```

## Production URL Format:
- Your app will be available at: `https://your-app-name.vercel.app`
- Admin panel: `https://your-app-name.vercel.app/admin`
- API: `https://your-app-name.vercel.app/api/pdfs`
