import express from "express"
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRouter = (app ) =>{
    router.get('/',homeController.getHomePage);

    router.get('/about',homeController.getAboutPage);
    router.get('/crud',homeController.getCRUDPage);

    router.post('/post-crud',homeController.postCRUD);
    router.get('/get-crud',homeController.dishplayGetCRUD);
    router.get('/edit-crud',homeController.getEditCRUD);
    router.post('/put-crud',homeController.putCRUD);
    router.get('/delete-crud',homeController.deleteCRUD);

    //api
    router.post('/api/login',userController.hanldLogin);


    return app.use("/", router);

}   

module.exports = initWebRouter;