import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem/>', () => {

    const todo = {
        id: 1,
        descrption: 'Piedra del Alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());
    test('debe mostrar el Todo pendiente de completar', () => {

        render(<TodoItem todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock} />);

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center');//contain porque en el dom tiene un espacio en blanco que quiero obviar
        expect( spanElement.className ).not.toContain('text-decoration-line-throughout');//contain porque en el dom tiene un espacio en blanco que quiero obviar
    });

    test('debe mostrar el Todo completado', () => {

        todo.done = true;

        render(<TodoItem 
            todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock} />);

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');//contain porque en el dom tiene un espacio en blanco que quiero obviar
    });

    test('el span debe llmaar el ToggleTodo cuando se hace click', () => { 
        /** Aca no tengo que evaluar la funcion onToggleTodo porque ya la evalue cuando
         * evalue el reducer. Para que la prueba sea atomica aca evaluo que se llame a la
         * funcion y nada mas.
         */
        

        render(<TodoItem 
            todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock} />);

            const spanElement = screen.getByLabelText('span');
            fireEvent.click( spanElement );
            expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );

     });
     test('el button debe llamar a deleteTodo', () => { 

        render(<TodoItem 
            todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock} />);

            const buttonElement = screen.getByRole('button'); //si tengo mas botones puedo usar aria-label
            fireEvent.click( buttonElement );
            expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
     });

})