import { Logger } from "../types/global"

type Options = {
  logger: Logger
}

async function konnichiwa({
  logger,
}: Options): Promise<void> {
    logger.info("NOVAPO 1.8.204")

}

export default konnichiwa;
