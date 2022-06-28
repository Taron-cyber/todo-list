import { VISISBILITY_FILTER } from "../constants";

export const getTodosVisibilityFilter = (store, visibilityFiler) => {
    switch(visibilityFiler) {
        case VISISBILITY_FILTER.COMPLETED:
            return store.todos.filter(todo => todo.completed);
        case VISISBILITY_FILTER.INCOMPLETED:
            return store.todos.filter(todo => !todo.completed);
        default:
            return store.todos;
    }
}