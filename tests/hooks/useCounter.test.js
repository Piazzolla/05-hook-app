import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { useCounter } from '../../src/hooks'

describe('Pruebas en el useCounter', () => { 
    test('Debe retornar', () => { 
        const { result } = renderHook( () => useCounter() );
        console.log(result);
        const { counter, decrease, increment, reset, setCounter } = result.current;

        
        expect( counter ).toBe( 10 );
        expect( decrease ).toEqual( expect.any( Function ));
        expect( increment ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ));
     });

     test('debe generar el counter con valor 100', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;
        expect( counter ).toBe(100);
      });

      test('debe incrementar el contador', () => { 
        const { result } = renderHook( () => useCounter() );
        const { counter, decrease, increment, reset, setCounter } = result.current;
        act(() => {
            increment();
            increment(2);
        });
        expect( result.current.counter ).toBe(13);
        act(() => {
            decrease();
            decrease(3);
        });
        expect( result.current.counter ).toBe(9);

       });

       test('debe decrementar el contador', () => { 
        const { result } = renderHook( () => useCounter() );
        const { counter, decrease, increment, reset, setCounter } = result.current;
        act(() => {
            decrease();
            decrease(3);
        });
        expect( result.current.counter ).toBe(6);
       });
       test('debe realizar el reset', () => { 
        const { result } = renderHook( () => useCounter() );
        const { counter, decrease, increment, reset, setCounter } = result.current;
        act(() => {
            decrease();
            decrease(3);
            reset();
        });
        expect( result.current.counter ).toBe(10);

        })
 });