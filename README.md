# Logger

A lightweight, colorized logging library for Node.js applications. It provides a simple API to print structured, color-coded log messages to the console with timestamps and custom labels.

## Installation

```bash
npm install logger
```

## Usage

```typescript
import { Logger } from "logger";

const log = new Logger("MyApp");

log.info("Server started on port 3000");
log.warn("Disk usage is above 80%");
log.error("Failed to connect to database");
```

### Output

```
[INFO][MyApp - 3/8/2026 - 10:30:00 AM] - Server started on port 3000
[WARNING][MyApp - 3/8/2026 - 10:30:00 AM] - Disk usage is above 80%
[ERROR][MyApp - 3/8/2026 - 10:30:00 AM] - Failed to connect to database
```

Log levels are color-coded using [chalk](https://github.com/chalk/chalk):
- **INFO** — green
- **WARNING** — yellow
- **ERROR** — red

## API

### `new Logger(name?, timeType?)`

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | `string` | `"APP"` | Label displayed in each log message |
| `timeType` | `"date" \| "datetime"` | `"datetime"` | `"date"` shows only the date, `"datetime"` shows date and time |

### Methods

- **`info(message: string)`** — Logs an informational message
- **`warn(message: string)`** — Logs a warning message
- **`error(message: string)`** — Logs an error message

## License

MIT
