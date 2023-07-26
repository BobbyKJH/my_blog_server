import express, { NextFunction } from 'express';

const app = express();

const port = "8080";


app.get('/welcome', (req: express.Request, res: express.Response) => {
	res.send('welcome!');
});

app.listen(port, () => {
			console.log(`
		  ${port}
		`);
		}
	);