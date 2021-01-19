import axios from "axios";

const API_URL = 'http://192.168.1.6:8080';

export function fetchOrders() {
    return axios(`${API_URL}/orders`);
}

export function confirmDelivery(id : number) {
    return axios.put(`${API_URL}/orders/${id}/delivered`)
}