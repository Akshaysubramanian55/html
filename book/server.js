const http = require('http');
const url = require('url');
const port = 3000;
const fs = require('fs');
const queryString = require('querystring');
const { MongoClient, ObjectId } = require('mongodb');

const client = new MongoClient("mongodb://127.0.0.1:27017");



const server = http.createServer(async (req, res) => {

    //Access the database and collections
    const db = client.db("users");
    const collection = db.collection("users_coll");

    console.log("url : ", req.url);

    //parse the requested url
    const parsed_url = url.parse(req.url);
    console.log("parsed_url : ", parsed_url);


    //serve the  HTML file to the root request
    if (parsed_url.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fs.readFileSync('./bookclient/index.html'));
    } else if (parsed_url.pathname === '/styles.css') {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(fs.readFileSync("./bookclient/styles.css"));
    } else if (parsed_url.pathname === '/booklist.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fs.readFileSync('./bookclient/booklist.html'));
    }else if (parsed_url.pathname === '/script.js') {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(fs.readFileSync('./bookclient/script.js'));
    }
    // handle form submission on post request to submit
    if (req.method === "POST" && parsed_url.pathname === "/submit") {
        console.log("Form submitted successfully");



        let body = '';
        //collect the data as it comes in chunks
        req.on('data', (chunk) => {
            console.log("chunk : ", chunk);
            console.log('chunk.toString(): ', chunk.toString());
            body += chunk.toString();
            console.log("body : ", body);
        });
        // process the form data on end of the project
        req.on('end', async () => {

            const formData = queryString.parse(body);
            console.log("formData : ", formData);

            console.log("Name : ", formData.name);
            console.log("email : ", formData.email);
            console.log("Password : ", formData.password);

            // save to database
            collection.insertOne(formData)
                .then((message) => {
                    console.log("document save successfully");
                    console.log("message", message);
                })
                .catch((error) => {
                    console.log("document not inserted");
                    console.log("database insersation error: ", error);
                })
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("form submitted successfully..");
        });

    }
    //Handle get request to the user details

    if (req.method === "GET" && parsed_url.pathname === "/getData") {
        let data = await collection.find().toArray();
        console.log("data : ", data);

        let json_data = JSON.stringify(data);
        console.log("jsondata : ", json_data);

        res.writeHead(200, { "Content-Type": "text/json" });
        res.end(json_data);
    }
    if (req.method === "PUT" && parsed_url.pathname === "/editData") {
        let body = "";
        req.on('data', (chunks) => {
            console.log("chunks : ", chunks);
            console.log('chunk.toString(): ', chunks.toString());
            body = body + chunks.toString();
            console.log("body : ", body);
        });
        req.on('end', async () => {
            console.log("body :", body);
            let data = JSON.parse(body);
            let id = data.id;
            console.log("id : ", id);

            let _id = new ObjectId(id);
            console.log("_id : ", _id);

            let updateDatas = {
                name: data.name,
                email: data.email,
                password: data.password,
            }
            await collection.updateOne({ _id }, { $set: updateDatas })
                .then((message) => {
                    console.log("Document updated successfully : ", message);
                    res.writeHead(200, { "Content-type": "text/plain" });
                    res.end("updated successfully");
                })
                .catch((error) => {
                    console.log("Document not updated : ", error);
                    res.writeHead(400, { "Content-type": "text/plain" });
                    res.end("Updation Failed");
                })
        })
    }

    if (req.method === "DELETE" && parsed_url.pathname === "/deleteData") {
        console.log("reached delete route");
        let body = "";
        req.on('data', (chunks) => {
            console.log("chunks : ", chunks);
            body = body + chunks.toString();
            console.log("body : ", body);
        });
        req.on('end', async () => {
            let _id = new ObjectId(body);
            await collection.deleteOne({ _id })
                .then((message) => {
                    console.log("deletion successful : ", message);
                    res.writeHead(200, { "Content-type": "text/plain" });
                    res.end("success");
                })
                .catch((error) => {
                    console.log("deletion failed : ", error);
                    res.writeHead(200, { "Content-type": "text/plain" });
                    res.end("failed");
                })
        })
    }
});

async function connect() {
    await client.connect()
        .then((message) => {
            console.log("database connection established", message);
        })
        .catch((error) => {
            console.log("Database connection error : ", error);
        })
        .finally(() => {
            server.listen(port, () => {
                console.log(`server running at http://127.0.0.1:${port}`)

            });
        })
}
connect();
