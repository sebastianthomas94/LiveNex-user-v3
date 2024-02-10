import dotenv from "dotenv";
console.log("dot env configuring")
if (process.env.NODE_ENV == 'production') {
    dotenv.config({ path: "./prod.env" });
}
else {
    dotenv.config({ path: "./dev.env" });

}