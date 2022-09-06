import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('pruebas en todoReducer', () => { 

    const initialState = [{id: 1, description: 'Demo TODO', done: false}]
    test('debe regresar el estado inicial', () => {
        const newState = todoReducer( initialState, {});
        expect( newState ).toBe( initialState ); //uso toBe y no toEqual porque aca espero literalment el mismo objeto

    });

    test('debe agregar un todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo',
                done: false
            }
        };
        const newState = todoReducer( initialState, action);
        expect( newState.length ).toBe( 2 ); //uso toBe y no toEqual porque aca espero literalment el mismo objeto
        expect( newState ).toContain( action.payload );

    });

    test('debe eliminar un todo', () => { 
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action);
        expect( newState.length ).toBe( 0 );
     });

     test('debe realizar el toggle del todo', () => { 
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action);
        expect( newState.filter(todo => todo.id === 1) ).toBeTruthy();
    });


 })