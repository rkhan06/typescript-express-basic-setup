import "dotenv/config";
import app from "./app";
import { PORT } from "./config";

app.listen(PORT, () => {
  console.log(`pp listening on port ${PORT}`);
});
