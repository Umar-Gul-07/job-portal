const Login = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                    <h1 className="text-2xl font-bold text-center mb-6">Login</h1>


                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div className="relative">
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter Email"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                            <span className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" className="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 12v.01m-6.938 4.906A9 9 0 1112 3a9 9 0 01-6.938 13.906z"/>
          </svg>
        </span>
                        </div>
                    </div>


                    <div className="mb-6">
                        <label htmlFor="password"
                               className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter Password"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                    </div>


                    <div className="mb-4">
                        <button
                            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
                            Log in
                        </button>
                    </div>

                    <p className="text-center text-gray-500 text-sm mb-4">Or</p>


                    <div className="text-center mb-2 text-gray-700 font-medium">Register as</div>
                    <div className="flex justify-between gap-4">
                        <button
                            className="flex-1 bg-green-100 text-green-700 py-2 px-4 rounded-lg border border-green-500 hover:bg-green-200 transition">
                            Job seeker
                        </button>
                        <button
                            className="flex-1 bg-white text-gray-700 py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                            I want to Hire
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login