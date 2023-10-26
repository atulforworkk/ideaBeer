const handleMarkAllComplete = () => {
    const completeTodos = todo.todos.map((todo) => ({
        ...todo,
        isCompleted: true,
    }));
    dispatch(markComplete(completeTodos));
};
