import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='main-body'>
      <h1 className='text-5xl text-center mt-20 font-bold'>My Name is Nasim</h1>
      <h2 className='text-2xl my-5 text-center font-semibold'>I live in Gangni</h2>
      <button class="btn btn-secondary block mx-auto">Button</button>
      <ToastContainer />
    </div>
  );
}

export default App;
