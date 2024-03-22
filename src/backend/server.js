const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const port = 3000;
const app = express();
app.use(cors());

app.listen(8081,()=>{ console.log('Server is running on port 8081');

})