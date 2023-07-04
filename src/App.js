import './App.css';
import {Routes, Route} from 'react-router-dom'


import { Layout } from './Layout';
import { About } from './components/ComponentAbout/about';
import { Home } from './components/ComponentHome/home';
import { Contacts } from './components/ComponentContacts/contacts';
import { Login } from './components/ComponentLogin/login';
import { Register } from './components/ComponentRegister/register';
import { Report } from './components/ComponentReport/report';
import { NotFound } from './components/ComponentNotFound/notFound';
import { Account } from './components/ComponentAccount/account';
import { ReportsTable } from './components/ComponentReportsTable/reportsTable';
import { WorkersTable } from './components/ComponentWorkersTable/workersTable';
import { Unatorized } from './components/ComponentUnauthorized/unauthorized';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        {/* public routes */}
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contacts' element={<Contacts/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='report' element={<Report/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='unauthorized' element={<Unatorized/>}/>

        {/* protected routes */}
        <Route element={<RequireAuth/>}>
          <Route path='account' element={<Account/>}/>
          <Route path='reportstable' element={<ReportsTable/>}/>
          <Route path='workerstable' element={<WorkersTable/>}/>
        </Route>
        
      </Route>
    </Routes>
  );
}

export default App;
