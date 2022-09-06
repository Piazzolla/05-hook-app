import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage />', () => {
    const user = { id: 123, name: 'juan', email: 'juan@google.com' };
    const setUserMock = jest.fn();


    test('debe mostrar el componente sin el usuario', () => {
        render( //para que ande tuve que agregarle ? a user.name en  HomePage.jsx
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>

        );
        const preTag = screen.getByLabelText('pre'); //aria-label
        expect( preTag.innerHTML ).toBe( 'null' );

    });
    test('La funcion setUser debe llamarse con el usuario cuando hago click en button', () => {
        render(<UserContext.Provider value={{ user, setUser: setUserMock }} >
            <LoginPage />
        </UserContext.Provider>);
        const setUserButton = screen.getByRole('button'); 
        fireEvent.click( setUserButton );
        const preTag = screen.getByLabelText('pre'); //aria-label
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( user.id.toString() );
        expect(setUserMock).toHaveBeenCalledWith(user);

    });
});