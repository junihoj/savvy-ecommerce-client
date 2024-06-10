import { apiService } from "../../utils/axios-api";

const createProduct = (data)=>apiService({url:`/product/create-product`, method:"post",data, otherConfig:{withCredentials:true}});
const deleteProduct = (id)=>apiService({url:`/product/delete-shop-product/${id}`, method:"delete",otherConfig:{withCredentials:true}});
const getAllProducts = ()=>apiService({url:`/product/get-all-products`})
const getAllShopProduct = (id)=>apiService({url:`/product/get-all-products-shop/${id}`})
const productRequest = {
    createProduct,
    deleteProduct,
    getAllProducts,
    getAllShopProduct
}

export default productRequest;