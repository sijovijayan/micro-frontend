# Weather App

Simple React + Redux app displaying weather data.

## AWS CodeBuild Setup

1. Create an S3 bucket for hosting
2. Create a CodeBuild project with:
   - Source: This repository
   - Environment: Amazon Linux 2
   - Service role with S3 write permissions
3. Add environment variable:
   - `S3_BUCKET`: Your S3 bucket name

## Local Development

```bash
cd weather-app
npm install
npm run dev
```
