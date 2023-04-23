import { Logger } from "../types/global"

type Options = {
  logger: Logger
}

async function konnichiwa({
  logger,
}: Options): Promise<void> {
    logger.info("NOVAPO V1.0.2")

}

export default konnichiwa;
