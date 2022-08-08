import { Request, Response } from 'express'
import {MongoClient} from 'mongodb'
import { IRecruiter } from '../interfaces/Irecruiter';

export async function generateNewProject(url) {
// Connection URL
const url = process.env.URI_DB
const client = new MongoClient(`${url}`);
// Database Name
const dbname="DjubatuseR_"+matricule
    
        client.connect  ((err)=> {
            // const db=client.db(dbname);
            const allCollections = ['imagesMulter','imagesCloudinary','imagesFireBase'].map(name => db.createCollection(name))
            const insertRecruiter = db.collection("imagesMulter").insertOne(
                {
                    
                }
            )
            // db.collection("Recruiters").insertMany([
            //     {firstName:"Dhaouadi",
            //     lastName:"dalila",
            //     email:"riden5211@gmail.com",
            //     password:"0123456789",
            //     phone:"+21695793875",
            //     companyId:"627a3b1196a052d1ec81f322"}
            // ]).then(function(){
            //     console.log("Data inserted")  // Success
            // }).catch(function(error){
            //     console.log(error)      // Failure
            // });
    
})
}