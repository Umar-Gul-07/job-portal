import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import {Link} from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <Card className="w-full max-w-lg p-6 bg-[#f7fcfc] rounded-lg">
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
            
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Email</label>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-100 rounded-md"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-100 rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#2b8200] hover:bg-green-700 text-white py-2 rounded-md"
            >
              Log in
            </Button>

            <div className="text-center text-gray-500">Or</div>

            <div className="space-y-4">
              <p className="text-center font-medium">Register as</p>
              <div className="grid grid-cols-2 gap-4">
                <Link to="/user-registration">
                <Button
                  type="button"
                  variant="secondary"
                  className="w-full bg-[#C0DAB3] hover:bg-[#c8d9c9] text-black"
                >
                  Job seeker
                </Button>
                </Link>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-white hover:bg-gray-50"
                >
                  I want to Hire
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

