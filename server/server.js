const express=require('express');
const connectDB=require('./config/connectDB');
const app=express();

const authRouter=require('./routes/api/auth');
const usersRouter=require('./routes/api/users');
const politiciansRouter=require('./routes/api/politicians');
const partiesRouter=require('./routes/api/parties');
const questionsRouter=require('./routes/api/questions');
//middleware
app.use(express.json());

//start the server
connectDB();

//routes
app.use("/api/auth",authRouter);
app.use("/api/users",usersRouter);
app.use("/api/politicians",politiciansRouter);
app.use("/api/parties",partiesRouter);
app.use("/api/questions",questionsRouter);



const port=process.env.PORT||5000.
app.listen(port,err=>
    err? console.log(err):console.log(`server started on port ${port}`)
)
