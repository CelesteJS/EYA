import { BrowserRouter, Route } from 'react-router-dom';
import { UsersForm } from './Form';
import { UsersList } from './List';

export function Home() {
    return (
        <BrowserRouter>
            <Route path="/" element={<UsersForm />} />
            <Route path="/solicitudes" element={<UsersList />} />
        </BrowserRouter>
    )
}
