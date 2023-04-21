import { ConfigModule, Logger, MedusaContainer } from "../types/global"

type Options = {
    logger: Logger
}

async function konichiwa({ logger }: Options): Promise<void> {
    logger.info("NOVAPO MEDUSAJS - VERSION 2.0.6")
}

export default konichiwa;