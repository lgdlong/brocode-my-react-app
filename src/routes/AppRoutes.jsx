import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import StateExPage from '../pages/StateExPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/state-example' element={<StateExPage />} />
            <Route path="/" element={<MainPage />} />
        </Routes>
    );
}
