import chalk from "chalk";

class Logger {
    private name: string;
    private time: Function;

    constructor(name: string = "APP", TimeType: "date" | "datetime" = "datetime") {
        this.name = name;
        this.time = () => {
            let time = new Date();
            let resultTime;
            switch (TimeType) {
                case "date":
                    resultTime = time.toLocaleDateString();
                    break;
                case "datetime":
                    resultTime = time.toLocaleDateString() + " - " + time.toLocaleTimeString();
                    break;
                default:
                    break;
            }

            return resultTime;
        }
    }

    /**
     * 
     * @param message the message you're trying to print to the stdout
     */

    info(message: string) {
        console.log(`${chalk.green("[INFO]")}${chalk.cyan(`[${this.name} - ${this.time()}]`)} - ${message}`);
    }

    /**
     * 
     * @param message the message you're trying to print to the stdout
     */

    warn(message: string) {
        console.log(`${chalk.yellow("[WARNING]")}${chalk.cyan(`[${this.name} - ${this.time()}]`)} - ${message}`);
    }

    /**
     * 
     * @param message the message you're trying to print to the stdout
     */

    error(message: string) {
        console.log(`${chalk.red("[ERROR]")}${chalk.cyan(`[${this.name} - ${this.time()}]`)} - ${message}`);
    }
}

export default Logger;