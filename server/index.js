import express from 'express';
import path from 'path'
import mongoose from 'mongoose'
import bluebird from 'bluebird'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import authRoute from './routes/auth'
import errorHandler from './midlewares/errorHandler'

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';


let app = express();

mongoose.Promise = bluebird;
mongoose.connect( 'localhost/blog-lesson', err =>{
	if(err){
		throw err;
	}
	console.log('mongo connected!');
})

app.use( morgan( 'tiny' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {extended: true} ) );


const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.use('/api', authRoute);

app.get('/*', (req,res)=>{
	res.sendFile(path.join(__dirname, './index.html'))
});

app.use(errorHandler)
app.listen(3000, ()=>console.log('running on localhost'))