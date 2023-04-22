import { Logger } from "../types/global"

type Options = {
  logger: Logger
}

async function konnichiwa({
  logger,
}: Options): Promise<void> {
    logger.info("NOVAPO V1.0.0")

}

export default konnichiwa;
