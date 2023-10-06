import logo from './logo.svg';
import './App.css';
import ExcerciseForm from './pages/ExcerciseForm';
import Example from './pages/Example';
import GoalTracking from './pages/GoalTracking';
import FoodTracking from './pages/FoodTracking';
import { Route, Routes } from 'react-router';
import ExcerciseList from './pages/ExcerciseList';
import { Link } from 'react-router-dom';
import FoodList from './pages/FoodList';
import GoalList from './pages/GoalList';
import Dashboard from './pages/Dashboard';
import Trackers from './pages/Trackers';
import NavigationBar from './components/NavigationBar';
import ExcerciseBoard from './pages/ExcerciseBoard';
import TrackedExcercise from './pages/TrackedExcercise';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      {<Toaster position="bottom-right" reverseOrder={true} />}
       <NavigationBar/>
       <Routes> 
        <Route path='/' element={<Dashboard/>}/>
       <Route path='/excercise' element={<ExcerciseForm/>}></Route>
        <Route path='/food' element={<FoodTracking/>}></Route>
        <Route path='/goal' element={<GoalTracking/>}></Route>
        <Route path='/tracker' element={<Trackers/>}/>
        <Route path='/excerciseboard' element={<ExcerciseBoard/>}/>
        <Route path='/tracked' element={<TrackedExcercise/>}/>

        <Route path='/excerciselist' element={<ExcerciseList/>}></Route>
        <Route path='/foodslist' element={<FoodList/>}></Route>
        <Route path='/goalslist' element={<GoalList/>}></Route>
       </Routes>
       
    </div>
  );
}

export default App;
