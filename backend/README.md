## Portfolio Backend

Simple Node.js/Express backend for the portfolio contact form.

### Quick Start

1. **Set up MongoDB** - See [MONGODB_SETUP.md](./MONGODB_SETUP.md) for detailed instructions
2. **Create `.env` file** - Copy the example below and fill in your values
3. **Install dependencies**: `npm install`
4. **Run development server**: `npm run dev`

### Environment variables

Create a `.env` file in the `backend` folder with at least:

- `PORT` – server port (default: `5000`)
- `FRONTEND_URL` – frontend origin (e.g. `http://localhost:5173`)
- `MONGO_URI` – MongoDB connection string
- `SMTP_HOST` – SMTP server host
- `SMTP_PORT` – SMTP server port (e.g. `587`)
- `SMTP_USER` – SMTP username/email
- `SMTP_PASS` – SMTP password
- `NOTIFY_TO` – email address to receive contact messages

### Scripts

- `npm install`
- `npm run dev` – start with nodemon (development)
- `npm start` – start in production mode

### API

- `GET /api/health` – health check.
- `POST /api/contacts` – submit a contact message:
  ```json
  {
    "fullName": "Your name",
    "email": "you@example.com",
    "phone": "optional",
    "subject": "optional",
    "message": "required"
  }
  ```
  Response on success:
  ```json
  {
    "success": true,
    "message": "Message stored successfully"
  }
  ```

