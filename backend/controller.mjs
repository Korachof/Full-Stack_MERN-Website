import 'dotenv/config';
import express from 'express';
import * as lego from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

// CREATE controller ******************************************
app.post ('/legolog', (req, res) => { 
    lego.createLegoSet(
        req.body.name, 
        req.body.price, 
        req.body.date
        )
        .then(legoSet => {
            res.status(201).json(legoSet);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Creating the Lego set document has failed.' });
        });
});

// RETRIEVE controller ****************************************************
app.get('/legolog', (req, res) => {
    lego.retrieveLegoSet()
        .then(legoSet => { 
            if (legoSet !== null) {
                res.json(legoSet);
            } else {
                res.status(404).json({ Error: 'The Lego set document has not been found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Retrieval of the Lego set has failed.' });
        });
});

// RETRIEVE by ID controller
app.get('/legolog/:_id', (req, res) => {
    lego.retrieveLegoSetByID(req.params._id)
    .then(legoSet => { 
        if (legoSet !== null) {
            res.json(legoSet);
        } else {
            res.status(404).json({ Error: 'The Lego set document has not been found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Retrieval of the Lego set has failed.' });
    });

});

// UPDATE controller ************************************
app.put('/legolog/:_id', (req, res) => {
    lego.updateLego(
        req.params._id, 
        req.body.name, 
        req.body.price, 
        req.body.date
    )
    .then(legoSet => {
        res.json(legoSet);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Updating the document has failed' });
    });
});

// DELETE Controller ******************************
app.delete('/legolog/:_id', (req, res) => {
    lego.deleteLegoById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'The requested document is deleted' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Deleting the document has failed.' });
        });
});

app.listen(PORT, () => {
    console.log(`the server is listening via port ${PORT}...`);
});