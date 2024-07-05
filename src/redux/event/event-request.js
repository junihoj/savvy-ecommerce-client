import { apiService } from "../../utils/axios-api";

const createEvent = (data)=>apiService({url:`/event/create-event`, method:"post",data, otherConfig:{withCredentials:true}});
const deleteEvent = (id)=>apiService({url:`/event/delete-shop-event/${id}`, method:"delete",otherConfig:{withCredentials:true}});
const getAllEvents = ()=>apiService({url:`/event/get-all-events`})
const getAllShopEvent = (id)=>apiService({url:`/event/get-all-events-shop/${id}`})
const eventRequest = {
    createEvent,
    deleteEvent,
    getAllEvents,
    getAllShopEvent
}

export default eventRequest;