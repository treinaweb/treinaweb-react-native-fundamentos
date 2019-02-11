import { ApiService } from './ApiService';
const endpoint = 'todo';

export const TodoService = {
    list(){
        return ApiService.get(endpoint);
    },
    create(item){
        return ApiService.post(endpoint, item);
    },
    remove(id){
        return ApiService.delete(endpoint, id);
    }
}