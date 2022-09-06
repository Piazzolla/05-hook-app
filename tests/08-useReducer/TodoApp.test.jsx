import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodo } from "../../src/hooks";

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en <TodoApp />', () => {
    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: true }
        ],
        handleDeleteTodo: jest.fn(),
        handleNewTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        todoCount: 2,
        pendingTodosCount: 1
    });
    test('debe mostrar el componente correctamente', () => {
        render(<TodoApp />);
        //        screen.debug();

        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();

      ///  console.log(screen.getByRole('textbox').className);

    });
});