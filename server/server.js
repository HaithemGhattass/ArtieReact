import express from 'express';
const app = express();
const port = process.env.PORT || 9090;

app.get("/api",(req,res) => {
     res.json({"users": [{
        title: "Picture 1",
        description: "lel sghar",
        imgUrl: "https://i.imgur.com/fHyEMsl.jpg"
     },{
        title: "Picture 2",
        description: "lel kbar",
        imgUrl: "https://i.imgur.com/fHyEMsl.jpg"
     }]})
    
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});