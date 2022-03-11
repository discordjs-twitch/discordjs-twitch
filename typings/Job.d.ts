import { CronCommand, CronJob } from "cron";
import { Moment } from "moment";

export declare class Job extends CronJob {
  constructor(
    name: string,
    cronTime: string | Date | Moment,
    onTick: CronCommand,
    debug?: boolean,
    onComplete?: CronCommand | null,
    start?: boolean,
    timeZone?: string,
    context?: any,
    runOnInit?: boolean,
    utcOffset?: string | number,
    unrefTimeout?: boolean
  );
}
