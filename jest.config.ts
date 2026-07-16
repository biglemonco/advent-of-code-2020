// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
	modulePathIgnorePatterns: ["plop-templates"]
};
export default config;
