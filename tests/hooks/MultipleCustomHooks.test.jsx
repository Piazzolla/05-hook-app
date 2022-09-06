import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useCounter, useFetch } from "../../src/hooks"

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('pruebas en MultipleCustomHooks', () => {
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'))
        expect(screen.getByText('Breaking Bad Quotes'))

        const nextButton = screen.getByRole('button', { name: 'Next quote' })
        expect(nextButton.disabled).toBeTruthy();
    })


    //los test del useFetch custom hook estan en el proyecto de la seccion anterior del curso
    test('debe mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect( screen.getByText('Hola Mundo')).toBeTruthy();
        expect( screen.getByText('Fernando')).toBeTruthy();
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();

    });

    test('debe llamar a la funci[on de incrementar', () => { 
        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement
        });

        render(<MultipleCustomHooks />);  
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click( nextButton );
        expect(mockIncrement).toHaveBeenCalled();

    })
})