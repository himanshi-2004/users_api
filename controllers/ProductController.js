const ProductModel = require('../models/Product')
class  ProductController{
      
    // static createproduct = async (req, res) => {
    //     try {
    //      // res.send("Hello user");
    //               const users = await ProductModel.find()
    //               //console.log(user)
    //               res.status(201).json({
    //                 status:"success",
    //                 message:"Successful",
    //                 users,
    //               })
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };

    static createproduct = async (req, res) => {
        try {
       
          const result = new ProductModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            numOfReviews: req.body.numOfReviews,
            category:req.body.category,
          })
          //saving data
          await result.save()
          res.status(201).send({
            status: 'success',
            message: 'Product Created Successfully 😃🍻',
            result,
        })
      } catch (err) {
        console.log(err)
    }  

    }


    static getallproduct = async (req, res) => {
        try {
         // res.send("Hello user");
                  const result = await ProductModel.find()
                  //console.log(user)
                  res.status(201).json({
                    status:"success",
                    message:"Successful",
                    result,
                  })
        } catch (err) {
          console.log(err);
        }
      };
       


  

      static deleteproduct = async (req, res) => {
        try {
          const productDelete = await ProductModel.findById(req.params.id)
      
          if (!productDelete) {
            return res
              .status(500)
              .json({ status: '500', message: 'user not !! found  😪  ' })
          }
      // To delete the data from database
          await ProductModel.deleteOne(productDelete)
      
          res.status(200).json({
            status: 'deleted successfully',
            message: '  Successfully user deleted 🥂🍻',
          })
        } catch (err) {
          console.log(err)
          }
        }

   
}
module.exports = ProductController