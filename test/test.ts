import { Logger } from "../src/index.ts";

const logger = new Logger("TEST");

logger.info("This is a success message");
logger.warn("This is a warning message");
logger.error("This is an error message");