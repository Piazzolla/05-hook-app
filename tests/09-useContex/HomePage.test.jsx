import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage"

describe('Pruebas en el componente <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Fernando'
    }

    test('debe mostrar el componente sin el usuario', () => {
        render( //para que ande tuve que agregarle ? a user.name en  HomePage.jsx
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>

        );
        const preTag = screen.getByLabelText('pre'); //aria-label
        expect( preTag.innerHTML ).toBe( 'null' );

    })
    test('debe mostrar el componente con el usuario', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre'); //aria-label

        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( user.id.toString() ); //tambien puede ser `${user.id}`
    })
});