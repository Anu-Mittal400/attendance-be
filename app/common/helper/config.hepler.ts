import dotenv from "dotenv";
import process from "process";
import path from "path";

export const loadConfig = () => {
  const filepath = path.join(process.cwd(), `.env`);
  dotenv.config({ path: filepath });
};
