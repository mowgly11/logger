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

    info(message: any) {
        console.log(`${chalk.cyan(`[${this.name} - ${this.time()}]`)} ${chalk.green("[INFO]")} - ${message}`);
    }

    /**
     * 
     * @param message the message you're trying to print to the stdout
     */

    warn(message: any) {
        console.log(`${chalk.cyan(`[${this.name} - ${this.time()}]`)} ${chalk.yellow("[WARNING]")} - ${message}`);
    }

    /**
     * 
     * @param message the message you're trying to print to the stdout
     */

    error(message: any, error: any) {
        console.log(`${chalk.cyan(`[${this.name} - ${this.time()}]`)} ${chalk.red("[ERROR]")} - ${message}\n${chalk.red("[ERROR DETAILS]")}: ${error}`);
    }
}

export default Logger;