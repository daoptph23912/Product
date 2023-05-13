const apimd = require('../../models/product.model')

exports.listProduct=async(req,res,next)=>{
    let dataReturn={
        status:1,
        msg:'ok'
    }
    let listProduct=[]
    try{
        listProduct=await apimd.find()
        dataReturn.data=listProduct;
    }catch(err){
        dataReturn.msg=err.message;
    }
    res.json(dataReturn)
}