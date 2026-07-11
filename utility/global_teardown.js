import fs from 'fs';

export default async function global_teardown() {

    console.log("Global tear down");
    if (fs.existsSync("storage_state.json")) {
        console.log("Storage state is present. Deleting it");
        fs.unlinkSync("storage_state.json")
    }
    else {
        console.log("Storage File not presnt")
    }
    console.log("Framework end");
}