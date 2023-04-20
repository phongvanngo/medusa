import { ConfigModule, Logger, MedusaContainer } from "../types/global"

type Options = {
    logger: Logger
}

async function konichiwa({ logger }: Options): Promise<void> {
    logger.info("NOVAPO MEDUSAJS - VERSION 1.0.8")
}

export default konichiwa;