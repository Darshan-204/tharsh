const axios=require('axios')
async function Prediction(req,res)
{
    try {
        // Forward the request body to the Flask ML API
        const response = await axios.post("http://127.0.0.1:8001/predict", req.body);

        // Send the prediction response back to the client
        res.json(response.data);
    } catch (error) {
        console.error("Error calling ML API:", error.message);
        res.status(500).send("Error connecting to the ML model.");
    }
}
module.exports=Prediction;