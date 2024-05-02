// import Header from '../components/header';
// import {useRouter} from 'next/router';
// import {useState}  from 'react';
// import axios from 'axios';

export default function SignUp() {
  // const router = useRouter();

  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [phone, setPhone] = useState('');

  // const handleSubmit = () => {
  //   e.preventDefault();
  //   const data = {
  //     username,
  //     email,
  //     password,
  //     phone,
  //   };
  //   axios
  //     .post('http://localhost:5555/user/register', data)
  //     .then(() => {
  //       console.log('Form submitted:', data);
  //     })
  //     .catch((error) => {
  //       alert('error Occurred');
  //     });
  //   closeModal();
  //   router.push('/');
  // };
    return (
      <>
      {/* <Header/> */}
      <div className="bg-neutral-700">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="ml-32 text-2xl font-extrabold text-white">ART GALLERY</div>
            <h2 className="sm:mx-auto sm:w-full sm:max-w-sm mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 focus:outline-none focus:border-orange-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 focus:outline-none focus:border-orange-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-white">
                  Phone number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 focus:outline-none focus:border-orange-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              {/* Your existing password field */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Password
                  </label>
                  {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-orange-600 hover:text-orange-800">
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 focus:outline-none focus:border-orange-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-orange-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Sign Up
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <a href="#" className="font-semibold leading-6 text-orange-600 hover:text-orange-800">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </div>
      </>
    );
  }
  